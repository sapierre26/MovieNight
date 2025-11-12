import express, { Request, Response } from "express";
import { MovieGoer } from "../models/movie-goer";

import MovieGoers from "../services/movie-goer-svc";

const router = express.Router();

router.get("/", (_, res: Response) => {
  MovieGoers.index()
    .then((list: MovieGoer[]) => res.json(list))
    .catch((err) => res.status(500).send(err));
});

router.get("/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;

  MovieGoers.get(userid)
    .then((traveler: MovieGoer) => res.json(traveler))
    .catch((err) => res.status(404).send(err));
});

router.post("/", (req: Request, res: Response) => {
  const newTraveler = req.body;

  MovieGoers.create(newTraveler)
    .then((traveler: MovieGoer) =>
      res.status(201).json(traveler)
    )
    .catch((err) => res.status(500).send(err));
});

router.put("/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;
  const newTraveler = req.body;

  MovieGoers.update(userid, newTraveler)
    .then((traveler: MovieGoer) => res.json(traveler))
    .catch((err) => res.status(404).end());
});

router.delete("/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;

  MovieGoers.remove(userid)
    .then(() => res.status(204).end())
    .catch((err) => res.status(404).send(err));
});

export default router;