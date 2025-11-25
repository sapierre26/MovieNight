import { Schema, model } from "mongoose";
import { MoviesOutNowItem } from "../models/movies-out-now-item";

const MoviesOutNowItemSchema = new Schema<MoviesOutNowItem>(
  {
    imgSrc: { type: String, required: true },
    outNowName: { type: String, required: true },
    squares: { type: Number, required: true },
    seeMovieTimesButton: { type: String, required: true },
    watchTrailerNowButton: { type: String, required: true },
  },
  { collection: "movies-out-now-data" },
);

const MoviesOutNowItemModel = model<MoviesOutNowItem>(
  "MoviesOutNowItem",
  MoviesOutNowItemSchema,
);

function index(): Promise<MoviesOutNowItem[]> {
  return MoviesOutNowItemModel.find().lean();
}

function get(outNowName: String): Promise<MoviesOutNowItem> {
  return MoviesOutNowItemModel.find({ outNowName })
    .then((list) => list[0])
    .catch((err) => {
      throw `${outNowName} Not Found`;
    });
}

export default { index, get };
