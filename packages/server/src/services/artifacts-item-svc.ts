import { Schema, model } from "mongoose";
import { ArtifactsItem } from "../models/artifacts-item";

const ArtifactsItemSchema = new Schema<ArtifactsItem>(
  {
    imgSrc: { type: String, required: true },
    artifactName: { type: String, required: true },
    artifactDescription: { type: String, required: true },
  },
  { collection: "artifacts-data" },
);

const ArtifactsItemModel = model<ArtifactsItem>(
  "Artifact Profile",
  ArtifactsItemSchema,
);

function index(): Promise<ArtifactsItem[]> {
  return ArtifactsItemModel.find();
}

function get(artifactName: String): Promise<ArtifactsItem> {
  return ArtifactsItemModel.find({ artifactName })
    .then((list) => list[0])
    .catch((err) => {
      throw `${artifactName} Not Found`;
    });
}

export default { index, get };
