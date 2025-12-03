import { Schema, model } from "mongoose";
import { MovieGoer } from "../models/movie-goer";

const MovieGoerSchema = new Schema<MovieGoer>(
  {
    userid: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    hometown: { type: String, trim: true },
    bio: { type: String, required: true }
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

function create(json: MovieGoer): Promise<MovieGoer> {
  const m = new MovieGoerModel(json);
  return m.save();
}

function update(
  userid: String,
  traveler: MovieGoer
): Promise<MovieGoer> {
  return MovieGoerModel.findOneAndUpdate({ userid }, traveler, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${userid} not updated`;
    else return updated as MovieGoer;
  });
}

function remove(userid: String): Promise<void> {
  return MovieGoerModel.findOneAndDelete({ userid }).then(
    (deleted) => {
      if (!deleted) throw `${userid} not deleted`;
    }
  );
}

export default { index, get, create, update, remove };