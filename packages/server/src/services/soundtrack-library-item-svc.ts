import { Schema, model } from "mongoose";
import { SoundtrackLibraryItem } from "../models/soundtrack-library-item";

const SoundtrackLibraryItemSchema = new Schema<SoundtrackLibraryItem>(
  {
    imgSrc: { type: String, required: true },
    soundtrackName: { type: String, required: true },
    runtime: { type: String, required: true },
    href: { type: String, required: true }
  },
  { collection: "soundtrack_library_items" }
);

const SoundtrackLibraryItemModel = model<SoundtrackLibraryItem>(
  "Soundtrack Profile",
  SoundtrackLibraryItemSchema
);

function index(): Promise<SoundtrackLibraryItem[]> {
  return SoundtrackLibraryItemModel.find();
}

function get(userid: String): Promise<SoundtrackLibraryItem> {
  return SoundtrackLibraryItemModel.find({ userid })
    .then((list) => list[0])
    .catch((err) => {
      throw `${userid} Not Found`;
    });
}

export default { index, get };