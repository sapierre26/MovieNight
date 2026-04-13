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
var theaters_list_item_svc_exports = {};
__export(theaters_list_item_svc_exports, {
  default: () => theaters_list_item_svc_default
});
module.exports = __toCommonJS(theaters_list_item_svc_exports);
var import_mongoose = require("mongoose");
const TheatersListItemSchema = new import_mongoose.Schema(
  {
    theaterName: { type: String, required: true },
    theaterInfo: { type: String, required: true },
    moviePaths: {
      type: [
        {
          imgSrc: { type: String, required: true },
          movieName: { type: String, required: true }
        }
      ],
      required: true
    },
    imgSrc: { type: String, required: true },
    movieName: { type: String, required: true }
  },
  { collection: "theaters-list-data" }
);
const TheatersListItemModel = (0, import_mongoose.model)(
  "TheatersListItem",
  TheatersListItemSchema
);
function index() {
  return TheatersListItemModel.find({});
}
function get(theaterName) {
  return TheatersListItemModel.find().then(
    (docs) => docs.map((doc) => doc._id).find((theater) => theater.theaterName === theaterName) || null
  );
}
function create(theaterItem) {
  const newTheater = new TheatersListItemModel(theaterItem);
  return newTheater.save();
}
var theaters_list_item_svc_default = { index, get, create };
