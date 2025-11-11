import express, { Request, Response } from "express";
import { SoundtrackLibraryItem } from "../models/soundtrack-library-item";
import Soundtracks from "../services/soundtrack-library-item-svc";

const router = express.Router();

router.get("/", (_, res: Response) => {
  Soundtracks.index()
    .then((list: SoundtrackLibraryItem[]) => res.json(list))
    .catch((err) => res.status(500).send(err));
});

router.get("/:soundtrackName", (req: Request, res: Response) => {
  const { soundtrackName } = req.params;

  Soundtracks.get(soundtrackName)
    .then((soundtrack: SoundtrackLibraryItem) => res.json(soundtrack))
    .catch((err) => res.status(404).send(err));
});

router.post("/", (req: Request, res: Response) => {
  const newSoundtrack = req.body;

  Soundtracks.create(newSoundtrack)
    .then((soundtrack: SoundtrackLibraryItem) =>
      res.status(201).json(soundtrack)
    )
    .catch((err) => res.status(500).send(err));
});

router.put("/:soundtrackName", (req: Request, res: Response) => {
  const { soundtrackName } = req.params;
  const newSoundtrack = req.body;

  Soundtracks.update(soundtrackName, newSoundtrack)
    .then((soundtrack: SoundtrackLibraryItem) => res.json(soundtrack))
    .catch((err) => res.status(404).end());
});

router.delete("/:soundtrackName", (req: Request, res: Response) => {
  const { soundtrackName } = req.params;

  Soundtracks.remove(soundtrackName)
    .then(() => res.status(204).end())
    .catch((err) => res.status(404).send(err));
});

export default router;