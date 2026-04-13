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
var theater_subitem_svc_exports = {};
__export(theater_subitem_svc_exports, {
  default: () => theater_subitem_svc_default
});
module.exports = __toCommonJS(theater_subitem_svc_exports);
var import_mongoose = require("mongoose");
const TheaterSubItemSchema = new import_mongoose.Schema(
  {
    theaterName: { type: String, required: true },
    theaterLocation: { type: String, required: true },
    distanceFromYou: { type: String, required: true },
    movieTimes: {
      type: [
        {
          movieTime: { type: String, required: true }
        }
      ],
      required: true
    }
  },
  { collection: "theater-subitem-data" }
);
const TheaterSubItemModel = (0, import_mongoose.model)(
  "Theater SubItem Profile",
  TheaterSubItemSchema
);
function index() {
  return TheaterSubItemModel.find();
}
function get(theaterName) {
  return TheaterSubItemModel.find({ theaterName }).then((list) => list[0]).catch((err) => {
    throw `${theaterName} Not Found`;
  });
}
var theater_subitem_svc_default = { index, get };
