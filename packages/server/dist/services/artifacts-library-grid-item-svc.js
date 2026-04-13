"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var artifacts_library_grid_item_svc_exports = {};
__export(artifacts_library_grid_item_svc_exports, {
  default: () => artifacts_library_grid_item_svc_default
});
module.exports = __toCommonJS(artifacts_library_grid_item_svc_exports);
var import_mongoose = require("mongoose");
const ArtifactsLibraryGridItemSchema = new import_mongoose.Schema(
  {
    imgSrc: { type: String, required: true },
    artifactName: { type: String, required: true },
    artifactDescription: { type: String, required: true }
  },
  { collection: "artifacts-library-data" }
);
const ArtifactsLibraryGridItemModel = (0, import_mongoose.model)(
  "ArtifactsLibraryGriditem",
  ArtifactsLibraryGridItemSchema
);
function index() {
  return ArtifactsLibraryGridItemModel.find({});
}
function get(artifactName) {
  return ArtifactsLibraryGridItemModel.find().then(
    (docs) => docs.map((doc) => doc._id).find((artifact) => artifact.artifactName === artifactName) || null
  );
}
function create(artifactItem) {
  const newArtifact = new ArtifactsLibraryGridItemModel(artifactItem);
  return newArtifact.save();
}
var artifacts_library_grid_item_svc_default = { index, get, create };
