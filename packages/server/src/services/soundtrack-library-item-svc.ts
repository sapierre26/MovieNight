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

function create(json: SoundtrackLibraryItem): Promise<SoundtrackLibraryItem> {
  const t = new SoundtrackLibraryItemModel(json);
  return t.save();
}

function update(
  soundtrackName: String,
  soundtrack: SoundtrackLibraryItem
): Promise<SoundtrackLibraryItem> {
  return SoundtrackLibraryItemModel.findOneAndUpdate({ soundtrackName }, soundtrack, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${soundtrackName} not updated`;
    else return updated as SoundtrackLibraryItem;
  });
}

function remove(soundtrackName: String): Promise<void> {
  return SoundtrackLibraryItemModel.findOneAndDelete({ soundtrackName }).then(
    (deleted) => {
      if (!deleted) throw `${soundtrackName} not deleted`;
    }
  );
}

export default { index, get, create, update, remove };
