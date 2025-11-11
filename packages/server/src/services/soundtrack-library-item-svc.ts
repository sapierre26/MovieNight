import { Schema, model } from "mongoose";
import { SoundtrackLibraryItem } from "../models/soundtrack-library-item";

const SoundtrackLibraryItemSchema = new Schema<SoundtrackLibraryItem>(
  {
    imgSrc: { type: String, required: true },
    soundtrackName: { type: String, required: true },
    runtime: { type: String, required: true },
    href: { type: String, required: true },
  },
  { collection: "soundtrack-data" },
);

const SoundtrackLibraryItemModel = model<SoundtrackLibraryItem>(
  "Soundtrack Profile",
  SoundtrackLibraryItemSchema,
);

function index(): Promise<SoundtrackLibraryItem[]> {
  return SoundtrackLibraryItemModel.find();
}

function get(soundtrackName: String): Promise<SoundtrackLibraryItem> {
  return SoundtrackLibraryItemModel.find({ soundtrackName })
    .then((list) => list[0])
    .catch((err) => {
      throw `${soundtrackName} Not Found`;
    });
}

export default { index, get };
