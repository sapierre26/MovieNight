import { Schema, model } from "mongoose";
import { ArtifactsLibraryGridItem } from "../models/artifacts-library-grid-item";

const ArtifactsLibraryGridItemSchema = new Schema<ArtifactsLibraryGridItem>(
  {
    imgSrc: { type: String, required: true },
    artifactName: { type: String, required: true },
    artifactDescription: { type: String, required: true },
  },
  { collection: "artifacts-library-data" },
);

const ArtifactsLibraryGridItemModel = model<ArtifactsLibraryGridItem>(
  "ArtifactsLibraryGriditem",
  ArtifactsLibraryGridItemSchema,
);

function index(): Promise<ArtifactsLibraryGridItem[]> {
  return ArtifactsLibraryGridItemModel.find({});
}

function get(artifactName: String): Promise<ArtifactsLibraryGridItem> {
  return ArtifactsLibraryGridItemModel.find().then(
    (docs: any[]) =>
      docs
        .map((doc) => doc._id)
        .find((artifact) => artifact.artifactName === artifactName) || null,
  );
}

function create(
  artifactItem: ArtifactsLibraryGridItem,
): Promise<ArtifactsLibraryGridItem> {
  const newArtifact = new ArtifactsLibraryGridItemModel(artifactItem);
  return newArtifact.save();
}

export default { index, get, create };
