import express, { Request, Response } from "express";
import MoviesOutNowGridItems from "../services/movies-out-now-grid-item-svc";

const router = express.Router();

router.get("/", async (_, res: Response) => {
  const list = await MoviesOutNowGridItems.index();
  res.json(list);
});

router.get("/:outNowName", async (req: Request, res: Response) => {
  const { outNowName } = req.params;
  try {
    const movie = await MoviesOutNowGridItems.get(outNowName);
    if (!movie) res.status(404).json({ error: "Movie not found" });
    else res.json(movie);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", (req: Request, res: Response) => {
  const newMovie = req.body;

  MoviesOutNowGridItems.create(newMovie)
    .then((movie) => res.status(201).json(movie))
    .catch((err) => res.status(500).send({ error: err.message || err }));
});

export default router;