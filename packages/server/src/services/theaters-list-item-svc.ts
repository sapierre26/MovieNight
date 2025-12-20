import { Schema, model } from "mongoose";
import { TheatersListItem } from "../models/theaters-list-item";

const TheatersListItemSchema = new Schema<TheatersListItem>(
  {
    theaterName: { type: String, required: true },
    theaterInfo: { type: String, required: true },
    moviePaths: {
      type: [
        {
          imgSrc: { type: String, required: true },
          movieName: { type: String, required: true },
        },
      ],
      required: true,
    },
    imgSrc: { type: String, required: true },
    movieName: { type: String, required: true }
  },
  { collection: "theaters-list-data" },
);

const TheatersListItemModel = model<TheatersListItem>(
  "TheatersListItem",
  TheatersListItemSchema,
);

function index(): Promise<TheatersListItem[]> {
  return TheatersListItemModel.find({});
}

function get(theaterName: String): Promise<TheatersListItem> {
  return TheatersListItemModel.find().then(
    (docs: any[]) =>
      docs
        .map((doc) => doc._id)
        .find((theater) => theater.theaterName === theaterName) || null,
  );
}

function create(
  theaterItem: TheatersListItem,
): Promise<TheatersListItem> {
  const newTheater = new TheatersListItemModel(theaterItem);
  return newTheater.save();
}

export default { index, get, create };