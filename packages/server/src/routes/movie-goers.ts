import express, { Request, Response } from "express";
import { MovieGoer } from "../models/movie-goer";

import MovieGoers from "../services/movie-goer-svc";

const router = express.Router();

router.get("/", (_, res: Response) => {
  MovieGoers.index()
    .then((list: MovieGoer[]) => res.json(list))
    .catch((err) => res.status(500).send({ error: err.message }));
});

router.get("/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;

  MovieGoers.get(userid)
    .then((moviegoer: MovieGoer) => res.json(moviegoer))
    .catch((err) => res.status(404).send({ error: err.message || err }));
});

router.post("/", (req: Request, res: Response) => {
  const newMovieGoer = req.body;

  MovieGoers.create(newMovieGoer)
    .then((moviegoer: MovieGoer) =>
      res.status(201).json(moviegoer)
    )
    .catch((err) => res.status(500).send({ error: err.message || err }));
});

router.put("/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;
  const newMovieGoer = req.body;

  MovieGoers.update(userid, newMovieGoer)
    .then((moviegoer: MovieGoer) => res.json(moviegoer))
    .catch((err) => res.status(404).json({ error: err.message }));
});

router.delete("/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;

  MovieGoers.remove(userid)
    .then(() => res.status(204).end())
    .catch((err) => res.status(404).send({ error: err.message || err }));
});

export default router;