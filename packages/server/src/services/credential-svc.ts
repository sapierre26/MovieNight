import bcrypt from "bcryptjs";
import { Schema, model } from "mongoose";
import { Credential } from "../models/credential";

const credentialSchema = new Schema<Credential>(
  {
    username: {
      type: String,
      trim: true
    },
    hashedPassword: {
      type: String,
    },
    image: {
      type: String,
      default: "/images/user-placeholder.png"
    },
    name: {
      type: String,
    },
    hometown: {
      type: String,
    },
    bio: {
      type: String,
    }
  },
  { collection: "user-credentials" }
);

const credentialModel = model<Credential>(
  "Credential",
  credentialSchema
);

function index(): Promise<Credential[]> {
  return credentialModel.find();
}

function get(username: String): Promise<Credential> {
  return credentialModel.findOne({ username: username })
    .then((doc) => {
      if (!doc) {
        throw new Error(`MovieGoer ${username} not found`);
      }
      return doc as Credential
    })
    .catch((err) => {
      throw err;
    });
}

function create(username: string, password: string, image: string, name: string, hometown: string, bio: string): Promise<Credential> {
    return credentialModel
      .find({ username })
      .then((found: Credential[]) => {
        if (found.length) throw `Username exists: ${username}`
      })
      .then(() =>
        bcrypt
          .genSalt(10)
          .then((salt: string) => bcrypt.hash(password, salt))
          .then((hashedPassword: string) => {
            const creds = new credentialModel({
              username,
              hashedPassword,
              image,
              name,
              hometown,
              bio
            });
            return creds.save();
          })
      );
}

function verify(username: string, password: string): Promise<string> {
  return credentialModel
    .find({ username })
    .then((found) => {
      if (!found || found.length !== 1)
        throw "Invalid username or password";
      return found[0];
    })
    .then(
      (credsOnFile : Credential) =>
        bcrypt.compare(
          password,
          credsOnFile.hashedPassword
        )
        .then((result: boolean) => {
          if (!result)
            throw("Invalid username or password");
          return credsOnFile.username;
        })
      );
}

async function update(username: string, profile: Partial<Credential>, newPassword?: string): Promise<Credential> {
  const updates: Partial<Credential> = { };
  if (profile.image !== undefined) updates.image = profile.image;
  if (profile.name !== undefined) updates.name = profile.name;
  if (profile.hometown !== undefined) updates.hometown = profile.hometown;
  if (profile.bio !== undefined) updates.bio = profile.bio;

  if (newPassword && newPassword.trim() !== "") {
    const salt = await bcrypt.genSalt(10);
    updates.hashedPassword = await bcrypt.hash(newPassword, salt);
  }

  return credentialModel
    .findOneAndUpdate({ username }, updates, { new: true })
    .then((updated) => {
      if (!updated) throw `User ${username} not updated`;
      return updated as Credential;
    })
}

function remove(username: String): Promise<void> {
  return credentialModel.findOneAndDelete({ username: username }).then((deleted) => {
    if (!deleted) throw `${username} not deleted`;
  });
}

export default { index, get, create, update, remove, verify };

  