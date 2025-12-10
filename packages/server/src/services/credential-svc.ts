import bcrypt from "bcryptjs";
import { Schema, model } from "mongoose";
import { Credential } from "../models/credential";

const credentialSchema = new Schema<Credential>(
  {
    userid: {
      type: String,
      required: true,
      trim: true
    },
    hashedPassword: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    hometown: {
      type: String,
      required: true
    },
    bio: {
      type: String,
      required: true
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

function create(userid: string, password: string, name: string, hometown: string, bio: string): Promise<Credential> {
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
  const updates: Partial<Credential> = { ...profile };

  if (newPassword && newPassword.trim() !== "") {
    const salt = await bcrypt.genSalt(10);
    updates.hashedPassword = await bcrypt.hash(newPassword, salt);
  }

  return credentialModel
    .findByIdAndUpdate({ userid: userid }, updates, { new: true })
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

  