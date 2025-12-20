import { Schema, model } from "mongoose";
import { MoviesOutNowGridItem } from "../models/movies-out-now-grid-item";

const MoviesOutNowGridItemSchema = new Schema<MoviesOutNowGridItem>(
  {
    imgSrc: { type: String, required: true },
    outNowName: { type: String, required: true },
    squares: { type: Number, required: true },
    seeMovieTimesButton: { type: String, required: true },
    watchTrailerNowButton: { type: String, required: true }
  },
  { collection: "movies-out-now-data" },
);

const MoviesOutNowGridItemModel = model<MoviesOutNowGridItem>(
  "MoviesOutNowGridItem",
  MoviesOutNowGridItemSchema,
);

function index(): Promise<MoviesOutNowGridItem[]> {
  return MoviesOutNowGridItemModel.find({});
}

function get(movieName: String): Promise<MoviesOutNowGridItem> {
  return MoviesOutNowGridItemModel.find().then(
    (docs: any[]) =>
      docs
        .map((doc) => doc._id)
        .find((movie) => movie.movieName === movieName) || null,
  );
}

function create(
  movieItem: MoviesOutNowGridItem,
): Promise<MoviesOutNowGridItem> {
  const newMovie = new MoviesOutNowGridItemModel(movieItem);
  return newMovie.save();
}

export default { index, get, create };
