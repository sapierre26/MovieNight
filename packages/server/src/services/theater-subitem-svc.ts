import { Schema, model } from "mongoose";
import { TheaterSubItem } from "../models/theater-subitem";

const TheaterSubItemSchema = new Schema<TheaterSubItem>(
  {
    theaterName: { type: String, required: true },
    theaterLocation: { type: String, required: true },
    distanceFromYou: { type: String, required: true },
    movieTimes: {
      type: [
        {
          movieTime: { type: String, required: true },
        },
      ],
      required: true,
    },
  },
  { collection: "theater-subitem-data" },
);

const TheaterSubItemModel = model<TheaterSubItem>(
  "Theater SubItem Profile",
  TheaterSubItemSchema,
);

function index(): Promise<TheaterSubItem[]> {
  return TheaterSubItemModel.find();
}

function get(theaterName: String): Promise<TheaterSubItem> {
  return TheaterSubItemModel.find({ theaterName })
    .then((list) => list[0])
    .catch((err) => {
      throw `${theaterName} Not Found`;
    });
}

export default { index, get };
