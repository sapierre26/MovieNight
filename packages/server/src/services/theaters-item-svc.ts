import { Schema, model } from "mongoose";
import { TheatersListItem } from "../models/theaters-item";

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
    href: { type: String, required: true },
    movieName: { type: String, required: true },
  },
  { collection: "theaters_data" },
);

const TheatersListItemModel = model<TheatersListItem>(
  "Theater Profile",
  TheatersListItemSchema,
);

function index(): Promise<TheatersListItem[]> {
  return TheatersListItemModel.find();
}

function get(theaterName: String): Promise<TheatersListItem> {
  return TheatersListItemModel.find({ theaterName })
    .then((list) => list[0])
    .catch((err) => {
      throw `${theaterName} Not Found`;
    });
}

export default { index, get };
