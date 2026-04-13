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
var music_library_grid_item_svc_exports = {};
__export(music_library_grid_item_svc_exports, {
  default: () => music_library_grid_item_svc_default
});
module.exports = __toCommonJS(music_library_grid_item_svc_exports);
var import_mongoose = require("mongoose");
const SoundtrackLibraryGridItemSchema = new import_mongoose.Schema(
  {
    imgSrc: { type: String, required: true },
    soundtrackName: { type: String, required: true },
    runtime: { type: String, required: true }
  },
  { collection: "music-library-data" }
);
const SoundtrackLibraryGridItemModel = (0, import_mongoose.model)(
  "MusicLibraryGridItem",
  SoundtrackLibraryGridItemSchema
);
function index() {
  return SoundtrackLibraryGridItemModel.find({});
}
function get(soundtrackName) {
  return SoundtrackLibraryGridItemModel.find().then(
    (docs) => docs.map((doc) => doc._id).find((soundtrack) => soundtrack.soundtrackName === soundtrackName) || null
  );
}
function create(soundtrackItem) {
  const newSoundtrack = new SoundtrackLibraryGridItemModel(soundtrackItem);
  return newSoundtrack.save();
}
var music_library_grid_item_svc_default = { index, get, create };
