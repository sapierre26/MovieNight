import express, { Request, Response } from "express";
import MovieLibraryGridItems from "../services/movie-library-grid-item-svc";

const router = express.Router();

// router.get("/", (_, res: Response) => {
//   MovieLibraryGridItems.index()
//     .then((list) => res.json(list))
//     .catch((err) => res.status(500).send({ error: err.message }));
// });

// router.get("/:movieName", (req: Request, res: Response) => {
//   const { movieName } = req.params;

//   MovieLibraryGridItems.get(movieName)
//     .then(profile => res.json(profile))
//     .catch((err) => res.status(404).send({ error: err.message }));
// });


router.get("/", async (_, res) => {
  const list = await MovieLibraryGridItems.index();
  res.json(list);
});

router.get("/:movieName", async (req: Request, res: Response) => {
  const { movieName } = req.params;
  try {
    const movie = await MovieLibraryGridItems.get(movieName);
    if (!movie) res.status(404).json({ error: "Movie not found" });
    else res.json(movie);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", (req: Request, res: Response) => {
  const newMovie = req.body;

  MovieLibraryGridItems.create(newMovie)
    .then((movie) => res.status(201).json(movie))
    .catch((err) => res.status(500).send({ error: err.message || err }));
});

export default router;