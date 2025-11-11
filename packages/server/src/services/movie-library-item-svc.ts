import { Schema, model } from "mongoose";
import { MovieLibraryItem } from "../models/movie-library-item";

const MovieLibraryItemSchema = new Schema<MovieLibraryItem>(
  {
    imgSrc: { type: String, required: true },
    movieName: { type: String, required: true },
    squares: { type: Number, required: true },
    movieInfoButton: { type: String, required: true },
  },
  { collection: "movie-library-data" },
);

const MovieLibraryItemModel = model<MovieLibraryItem>(
  "Movie Library Profile",
  MovieLibraryItemSchema,
);

function index(): Promise<MovieLibraryItem[]> {
  return MovieLibraryItemModel.find();
}

function get(movieName: String): Promise<MovieLibraryItem> {
  return MovieLibraryItemModel.find({ movieName })
    .then((list) => list[0])
    .catch((err) => {
      throw `${movieName} Not Found`;
    });
}

export default { index, get };
