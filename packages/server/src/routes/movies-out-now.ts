import express, { Request, Response } from "express";
import { MoviesOutNowItem } from "../models/movies-out-now-item";
import MoviesOutNow from "../services/movies-out-now-item-svc";

const router = express.Router();

router.get("/", (_, res: Response) => {
  MoviesOutNow.index()
    .then((list: MoviesOutNowItem[]) => res.json(list))
    .catch((err) => res.status(500).send(err));
});

router.get("/:outNowName", (req: Request, res: Response) => {
  const { outNowName } = req.params;

  MoviesOutNow.get(outNowName)
    .then((movie: MoviesOutNowItem) => res.json(movie))
    .catch((err) => res.status(404).send(err));
});

router.post("/", (req: Request, res: Response) => {
  const newMovie = req.body;

  MoviesOutNow.create(newMovie)
    .then((movie: MoviesOutNowItem) =>
      res.status(201).json(movie)
    )
    .catch((err) => res.status(500).send(err));
});

router.put("/:outNowName", (req: Request, res: Response) => {
  const { outNowName } = req.params;
  const newMovie = req.body;

  MoviesOutNow.update(outNowName, newMovie)
    .then((movie: MoviesOutNowItem) => res.json(movie))
    .catch((err) => res.status(404).end());
});

router.delete("/:outNowName", (req: Request, res: Response) => {
  const { outNowName } = req.params;

  MoviesOutNow.remove(outNowName)
    .then(() => res.status(204).end())
    .catch((err) => res.status(404).send(err));
});

export default router;