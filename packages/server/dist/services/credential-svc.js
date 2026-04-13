"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var credential_svc_exports = {};
__export(credential_svc_exports, {
  default: () => credential_svc_default
});
module.exports = __toCommonJS(credential_svc_exports);
var import_bcryptjs = __toESM(require("bcryptjs"));
var import_mongoose = require("mongoose");
const credentialSchema = new import_mongoose.Schema(
  {
    username: {
      type: String,
      trim: true
    },
    hashedPassword: {
      type: String
    },
    image: {
      type: String,
      default: "/images/user-placeholder.png"
    },
    name: {
      type: String
    },
    hometown: {
      type: String
    },
    bio: {
      type: String
    }
  },
  { collection: "user-credentials" }
);
const credentialModel = (0, import_mongoose.model)(
  "Credential",
  credentialSchema
);
function index() {
  return credentialModel.find();
}
function get(username) {
  return credentialModel.findOne({ username }).then((doc) => {
    if (!doc) {
      throw new Error(`MovieGoer ${username} not found`);
    }
    return doc;
  }).catch((err) => {
    throw err;
  });
}
function create(username, password, image, name, hometown, bio) {
  return credentialModel.find({ username }).then((found) => {
    if (found.length) throw `Username exists: ${username}`;
  }).then(
    () => import_bcryptjs.default.genSalt(10).then((salt) => import_bcryptjs.default.hash(password, salt)).then((hashedPassword) => {
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
function verify(username, password) {
  return credentialModel.find({ username }).then((found) => {
    if (!found || found.length !== 1)
      throw "Invalid username or password";
    return found[0];
  }).then(
    (credsOnFile) => import_bcryptjs.default.compare(
      password,
      credsOnFile.hashedPassword
    ).then((result) => {
      if (!result)
        throw "Invalid username or password";
      return credsOnFile.username;
    })
  );
}
async function update(username, profile, newPassword) {
  const updates = {};
  if (profile.image !== void 0) updates.image = profile.image;
  if (profile.name !== void 0) updates.name = profile.name;
  if (profile.hometown !== void 0) updates.hometown = profile.hometown;
  if (profile.bio !== void 0) updates.bio = profile.bio;
  if (newPassword && newPassword.trim() !== "") {
    const salt = await import_bcryptjs.default.genSalt(10);
    updates.hashedPassword = await import_bcryptjs.default.hash(newPassword, salt);
  }
  return credentialModel.findOneAndUpdate({ username }, updates, { new: true }).then((updated) => {
    if (!updated) throw `User ${username} not updated`;
    return updated;
  });
}
function remove(username) {
  return credentialModel.findOneAndDelete({ username }).then((deleted) => {
    if (!deleted) throw `${username} not deleted`;
  });
}
var credential_svc_default = { index, get, create, update, remove, verify };
