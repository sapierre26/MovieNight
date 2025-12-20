import express, { Request, Response } from "express";
import ArtifactsLibraryGridItems from "../services/artifacts-library-grid-item-svc";

const router = express.Router();

router.get("/", async (_, res: Response) => {
  const list = await ArtifactsLibraryGridItems.index();
  res.json(list);
});

router.post("/", (req: Request, res: Response) => {
  const newArtifact = req.body;

  ArtifactsLibraryGridItems.create(newArtifact)
    .then((artifact) => res.status(201).json(artifact))
    .catch((err) => res.status(500).send({ error: err.message || err }));
});

export default router;