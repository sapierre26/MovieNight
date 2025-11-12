import { Schema, model } from "mongoose";
import { MovieGoer } from "../models/movie-goer";

const MovieGoerSchema = new Schema<MovieGoer>(
  {
    userid: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    username: { type: String, trim: true },
    home: { type: String, trim: true },
    favoriteMovies: [String],
    avatar: String,
    color: String
  },
  { collection: "movie-goers" }
);

const MovieGoerModel = model<MovieGoer>(
  "Profile",
  MovieGoerSchema
);

function index(): Promise<MovieGoer[]> {
  return MovieGoerModel.find();
}

function get(userid: String): Promise<MovieGoer> {
  return MovieGoerModel.find({ userid })
    .then((list) => list[0])
    .catch((err) => {
      throw `${userid} Not Found`;
    });
}

export default { index, get };