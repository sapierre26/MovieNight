import { Schema, model } from "mongoose";
import { PlaylistItem } from "../models/playlist-item";

const PlaylistItemSchema = new Schema<PlaylistItem>(
  {
    imgSrc: { type: String, required: true },
    songName: { type: String, required: true },
    songLength: { type: String, required: true },
    credits: { type: String, required: true },
    href: { type: String, required: true }
  },
  { collection: "playlist-data" }
);

const PlaylistItemModel = model<PlaylistItem>(
  "Playlist Profile",
  PlaylistItemSchema
);

function index(): Promise<PlaylistItem[]> {
  return PlaylistItemModel.find();
}

function get(songName: String): Promise<PlaylistItem> {
  return PlaylistItemModel.find({ songName })
    .then((list) => list[0])
    .catch((err) => {
      throw `${songName} Not Found`;
    });
}

export default { index, get };