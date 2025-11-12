// src/index.ts
import express, { Request, Response } from "express";
import { connect } from "./services/mongo";
import auth, { authenticateUser } from "./routes/auth";
import SoundtrackLibraryItem from "./services/soundtrack-library-item-svc";
import PlaylistItem from "./services/playlist-item-svc";
import MoviesOutNowItem from "./services/movies-out-now-item-svc";
import TheatersSubItem from "./services/theaters-subitem-svc";
import MovieLibraryItem from "./services/movie-library-item-svc";
import TheatersListItem from "./services/theaters-item-svc";
import TheaterSubItem from "./services/theater-subitem-svc";
import ArtifactsItem from "./services/artifacts-item-svc";
import soundtracks from "./routes/soundtracks";

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

app.use(express.static(staticDir));

app.use(express.json());

app.use("/api/soundtracks", authenticateUser, soundtracks);

app.use("/auth", auth);

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello, World");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

connect("Blazing");

app.get(
  "/SoundtrackLibraryItem/:soundtrackName",
  (req: Request, res: Response) => {
    const { soundtrackName } = req.params;

    SoundtrackLibraryItem.get(soundtrackName).then((data) => {
      if (data)
        res.set("Content-Type", "application/json").send(JSON.stringify(data));
      else res.status(404).send();
    });
  },
);

app.get(
  "/PlaylistItem/:songName",
  (req: Request, res: Response) => {
    const { songName } = req.params;

    PlaylistItem.get(songName).then((data) => {
      if (data)
        res.set("Content-Type", "application/json").send(JSON.stringify(data));
      else res.status(404).send();
    });
  },
);

app.get(
  "/MoviesOutNowItem/:outNowName",
  (req: Request, res: Response) => {
    const { outNowName } = req.params;

    MoviesOutNowItem.get(outNowName).then((data) => {
      if (data)
        res.set("Content-Type", "application/json").send(JSON.stringify(data));
      else res.status(404).send();
    });
  },
);

app.get(
  "/TheatersSubItem/:theaterName",
  (req: Request, res: Response) => {
    const { theaterName } = req.params;

    TheatersSubItem.get(theaterName).then((data) => {
      if (data)
        res.set("Content-Type", "application/json").send(JSON.stringify(data));
      else res.status(404).send();
    });
  },
);

app.get(
  "/MovieLibraryItem/:movieName",
  (req: Request, res: Response) => {
    const { movieName } = req.params;

    MovieLibraryItem.get(movieName).then((data) => {
      if (data)
        res.set("Content-Type", "application/json").send(JSON.stringify(data));
      else res.status(404).send();
    });
  },
);

app.get(
  "/TheatersListItem/:theaterName",
  (req: Request, res: Response) => {
    const { theaterName } = req.params;

    TheatersListItem.get(theaterName).then((data) => {
      if (data)
        res.set("Content-Type", "application/json").send(JSON.stringify(data));
      else res.status(404).send();
    });
  },
);

app.get(
  "/TheaterSubItem/:theaterName",
  (req: Request, res: Response) => {
    const { theaterName } = req.params;

    TheaterSubItem.get(theaterName).then((data) => {
      if (data)
        res.set("Content-Type", "application/json").send(JSON.stringify(data));
      else res.status(404).send();
    });
  },
);

app.get(
  "/ArtifactsItem/:artifactName",
  (req: Request, res: Response) => {
    const { artifactName } = req.params;

    ArtifactsItem.get(artifactName).then((data) => {
      if (data)
        res.set("Content-Type", "application/json").send(JSON.stringify(data));
      else res.status(404).send();
    });
  },
);