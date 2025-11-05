// src/index.ts
import express, { Request, Response } from "express";
import { connect } from "./services/mongo";
import SoundtrackLibraryItem from "./services/soundtrack-library-item-svc";

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "public";

app.use(express.static(staticDir));

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello, World");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

connect("blazing");

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
