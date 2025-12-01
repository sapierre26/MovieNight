import { Schema, model } from "mongoose";
import { MoviesOutNowItem } from "../models/movies-out-now-item";

const MoviesOutNowItemSchema = new Schema<MoviesOutNowItem>(
  {
    outNowName: { type: String, required: true },
    releaseYear: { type: String, required: true },
    runtime: { type: String, required: true },
    imgSrc: { type: String, required: true }
  },
  { collection: "movies-out-now-item-data" },
);

const MoviesOutNowItemModel = model<MoviesOutNowItem>(
  "MoviesOutNowItem",
  MoviesOutNowItemSchema,
);

function index(): Promise<MoviesOutNowItem[]> {
  return MoviesOutNowItemModel.find().lean();
}

function get(outNowName: string): Promise<MoviesOutNowItem> {
  return MoviesOutNowItemModel.find({ outNowName })
    .then((list) => list[0])
    .catch((err) => {
      throw `${outNowName} Not Found`;
    });
}

function create(json: MoviesOutNowItem): Promise<MoviesOutNowItem> {
  const m = new MoviesOutNowItemModel(json);
  return m.save();
}

function update(
  outNowName: string,
  outNowItem: MoviesOutNowItem
): Promise<MoviesOutNowItem> {
  return MoviesOutNowItemModel.findOneAndUpdate({ outNowName }, outNowItem, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${outNowName} not updated`;
    else return updated as MoviesOutNowItem;
  });
}

function remove(outNowName: string): Promise<void> {
  return MoviesOutNowItemModel.findOneAndDelete({ outNowName }).then(
    (deleted) => {
      if (!deleted) throw `${outNowName} not deleted`;
    }
  );
}

export default { index, get, create, update, remove };
