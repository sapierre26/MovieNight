import { Schema, model } from "mongoose";
import { TheatersSubItem } from "../models/theaters-subitem";

const TheatersSubItemSchema = new Schema<TheatersSubItem>(
  {
    theaterName: { type: String, required: true },
    theaterLocation: { type: String, required: true },
    distanceFromYou: { type: String, required: true },
    movieTimes: {
      type: [
        {
          movieTime: { type: String, required: true }
        },
      ],
      required: true,
    },
    movieTime: { type: String, required: true }
  },
  { collection: "theaters-subitem-data" }
);

const TheatersSubItemModel = model<TheatersSubItem>(
  "Theaters SubItem Profile",
  TheatersSubItemSchema
);

function index(): Promise<TheatersSubItem[]> {
  return TheatersSubItemModel.find();
}

function get(theaterName: String): Promise<TheatersSubItem> {
  return TheatersSubItemModel.find({ theaterName })
    .then((list) => list[0])
    .catch((err) => {
      throw `${theaterName} Not Found`;
    });
}

export default { index, get };