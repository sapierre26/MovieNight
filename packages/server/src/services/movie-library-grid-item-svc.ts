import { Schema, model } from "mongoose";
import { MovieLibraryGridItem } from "../models/movie-library-grid-item";

const MovieLibraryGridItemSchema = new Schema<MovieLibraryGridItem>(
  {
    imgSrc: { type: String, required: true },
    movieName: { type: String, required: true },
    squares: { type: Number, required: true }
    // genres: { type: String[], required: true }
  },
  { collection: "movie-library-data" },
);

const MovieLibraryItemModel = model<MovieLibraryGridItem>(
  "MovieLibraryGridItem",
  MovieLibraryGridItemSchema,
);

function index(): Promise<MovieLibraryGridItem[]> {
  return MovieLibraryItemModel.find({});
}

function get(movieName: String): Promise<MovieLibraryGridItem> {
  return MovieLibraryItemModel.find().then(
    (docs: any[]) =>
      docs
        .map((doc) => doc._id)
        .find((movie) => movie.movieName === movieName) || null,
  );
}

function create(
  movieItem: MovieLibraryGridItem,
): Promise<MovieLibraryGridItem> {
  const newMovie = new MovieLibraryItemModel(movieItem);
  return newMovie.save();
}

export default { index, get, create };
