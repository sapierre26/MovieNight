// src/index.ts
import express, { Request, Response } from "express";
import { connect } from "./services/mongo";
import auth, { authenticateUser } from "./routes/auth";
import fs from "node:fs/promises";
import path from "path";
import movieGoers from "./routes/movie-goers";
import moviesOutNowGridItems from "./routes/movies-out-now-grid-item-route";
import movieLibraryGridItems from "./routes/movie-library-grid-item-route";
import musicLibraryGridItems from "./routes/music-library-grid-item-route";
import artifactsLibraryGridItems from "./routes/artifacts-library-grid-item-route";

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

app.use(express.json());

app.use("/api/movie-goers", authenticateUser, movieGoers);
app.use("/api/movies-out-now", moviesOutNowGridItems);
app.use("/api/movie-library", movieLibraryGridItems);
app.use("/api/music-library", musicLibraryGridItems);
app.use("/api/famous-film-artifacts", artifactsLibraryGridItems);

app.use("/auth", auth);

app.use(express.static(staticDir));

// SPA Routes
app.use("/movie-night", (req: Request, res: Response) => {
  const indexHtml = path.resolve(staticDir, "index.html");
  fs.readFile(indexHtml, { encoding: "utf8" }).then((html) => res.send(html));
});


app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello, World");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

connect("Blazing");
