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
var movies_out_now_grid_item_svc_exports = {};
__export(movies_out_now_grid_item_svc_exports, {
  default: () => movies_out_now_grid_item_svc_default
});
module.exports = __toCommonJS(movies_out_now_grid_item_svc_exports);
var import_mongoose = require("mongoose");
const MoviesOutNowGridItemSchema = new import_mongoose.Schema(
  {
    imgSrc: { type: String, required: true },
    outNowName: { type: String, required: true },
    squares: { type: Number, required: true },
    seeMovieTimesButton: { type: String, required: true },
    watchTrailerNowButton: { type: String, required: true }
  },
  { collection: "movies-out-now-data" }
);
const MoviesOutNowGridItemModel = (0, import_mongoose.model)(
  "MoviesOutNowGridItem",
  MoviesOutNowGridItemSchema
);
function index() {
  return MoviesOutNowGridItemModel.find({});
}
function get(movieName) {
  return MoviesOutNowGridItemModel.find().then(
    (docs) => docs.map((doc) => doc._id).find((movie) => movie.movieName === movieName) || null
  );
}
function create(movieItem) {
  const newMovie = new MoviesOutNowGridItemModel(movieItem);
  return newMovie.save();
}
var movies_out_now_grid_item_svc_default = { index, get, create };
