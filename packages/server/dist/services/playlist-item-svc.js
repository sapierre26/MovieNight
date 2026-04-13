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
var playlist_item_svc_exports = {};
__export(playlist_item_svc_exports, {
  default: () => playlist_item_svc_default
});
module.exports = __toCommonJS(playlist_item_svc_exports);
var import_mongoose = require("mongoose");
const PlaylistItemSchema = new import_mongoose.Schema(
  {
    imgSrc: { type: String, required: true },
    songName: { type: String, required: true },
    songLength: { type: String, required: true },
    credits: { type: String, required: true },
    href: { type: String, required: true }
  },
  { collection: "playlist-data" }
);
const PlaylistItemModel = (0, import_mongoose.model)(
  "Playlist Profile",
  PlaylistItemSchema
);
function index() {
  return PlaylistItemModel.find();
}
function get(songName) {
  return PlaylistItemModel.find({ songName }).then((list) => list[0]).catch((err) => {
    throw `${songName} Not Found`;
  });
}
var playlist_item_svc_default = { index, get };
