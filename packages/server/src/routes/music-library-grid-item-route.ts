import express, { Request, Response } from "express";
import MusicLibraryGridItems from "../services/music-library-grid-item-svc";

const router = express.Router();

router.get("/", async (_, res: Response) => {
  const list = await MusicLibraryGridItems.index();
  res.json(list);
});

router.get("/:soundtrackName", async (req: Request, res: Response) => {
  const { soundtrackName } = req.params;
  try {
    const soundtrack = await MusicLibraryGridItems.get(soundtrackName);
    if (!soundtrack) res.status(404).json({ error: "Soundtrack not found" });
    else res.json(soundtrack);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", (req: Request, res: Response) => {
  const newSoundtrack = req.body;

  MusicLibraryGridItems.create(newSoundtrack)
    .then((soundtrack) => res.status(201).json(soundtrack))
    .catch((err) => res.status(500).send({ error: err.message || err }));
});

export default router;