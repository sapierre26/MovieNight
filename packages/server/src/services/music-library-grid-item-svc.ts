import { Schema, model } from "mongoose";
import { SoundtrackLibraryGridItem } from "../models/music-library-grid-item";

const SoundtrackLibraryGridItemSchema = new Schema<SoundtrackLibraryGridItem>(
  {
    imgSrc: { type: String, required: true },
    soundtrackName: { type: String, required: true },
    runtime: { type: String, required: true }
  },
  { collection: "music-library-data" },
);

const SoundtrackLibraryGridItemModel = model<SoundtrackLibraryGridItem>(
  "MusicLibraryGridItem",
  SoundtrackLibraryGridItemSchema,
);

function index(): Promise<SoundtrackLibraryGridItem[]> {
  return SoundtrackLibraryGridItemModel.find({});
}

function get(soundtrackName: String): Promise<SoundtrackLibraryGridItem> {
  return SoundtrackLibraryGridItemModel.find().then(
    (docs: any[]) =>
      docs
        .map((doc) => doc._id)
        .find((soundtrack) => soundtrack.soundtrackName === soundtrackName) || null,
  );
}

function create(
  soundtrackItem: SoundtrackLibraryGridItem,
): Promise<SoundtrackLibraryGridItem> {
  const newSoundtrack = new SoundtrackLibraryGridItemModel(soundtrackItem);
  return newSoundtrack.save();
}

export default { index, get, create };