import express, { Request, Response } from "express";
import TheatersListItems from "../services/theaters-list-item-svc";

const router = express.Router();

router.get("/", async (_, res: Response) => {
  const list = await TheatersListItems.index();
  res.json(list);
});

router.get("/:movieName", async (req: Request, res: Response) => {
  const { theaterName } = req.params;
  try {
    const theater = await TheatersListItems.get(theaterName);
    if (!theater) res.status(404).json({ error: "Movie not found" });
    else res.json(theater);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", (req: Request, res: Response) => {
  const newTheater = req.body;

  TheatersListItems.create(newTheater)
    .then((theater) => res.status(201).json(theater))
    .catch((err) => res.status(500).send({ error: err.message || err }));
});

export default router;