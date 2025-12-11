import bcrypt from "bcryptjs";
import { Schema, model } from "mongoose";
import { Credential } from "../models/credential";

const credentialSchema = new Schema<Credential>(
  {
    userid: {
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

function get(userid: String): Promise<Credential> {
  return credentialModel.findOne({ userid: userid })
    .then((doc) => {
      if (!doc) {
        throw new Error(`MovieGoer ${userid} not found`);
      }
      return doc as Credential
    })
    .catch((err) => {
      throw err;
    });
}

function create(userid: string, password: string, image: string, name: string, hometown: string, bio: string): Promise<Credential> {
    return credentialModel
      .find({ userid })
      .then((found: Credential[]) => {
        if (found.length) throw `Username exists: ${userid}`
      })
      .then(() =>
        bcrypt
          .genSalt(10)
          .then((salt: string) => bcrypt.hash(password, salt))
          .then((hashedPassword: string) => {
            const creds = new credentialModel({
              userid,
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

function verify(userid: string, password: string): Promise<string> {
  return credentialModel
    .find({ userid })
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
          return credsOnFile.userid;
        })
      );
}

async function update(userid: string, profile: Partial<Credential>, newPassword?: string): Promise<Credential> {
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
    .findOneAndUpdate({ userid }, updates, { new: true })
    .then((updated) => {
      if (!updated) throw `User ${userid} not updated`;
      return updated as Credential;
    })
}

function remove(userid: String): Promise<void> {
  return credentialModel.findOneAndDelete({ userid: userid }).then((deleted) => {
    if (!deleted) throw `${userid} not deleted`;
  });
}

export default { index, get, create, update, remove, verify };

  