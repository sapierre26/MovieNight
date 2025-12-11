import express, { Request, Response } from "express";
import { Credential } from "../models/credential";

import Credentials from "../services/credential-svc";
import { authenticateUser } from "./auth";

const router = express.Router();

router.get("/", (_, res: Response) => {
  Credentials.index()
    .then((list) => res.json(list))
    .catch((err) => res.status(500).send({ error: err.message }));
});

router.get("/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;

  Credentials.get(userid)
    .then(profile => res.json(profile))
    .catch((err) => res.status(404).send({ error: err.message }));
});

router.post("/", (req: Request, res: Response) => {
  const { username, password, name, hometown, bio } = req.body;

  Credentials.create(username, password, name, hometown, bio)
    .then((moviegoer: Credential) =>
      res.status(201).json(moviegoer)
    )
    .catch((err) => res.status(500).send({ error: err.message || err }));
});

router.put("/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;
  const { newPassword, ...profile } = req.body;
  // const updates = req.body.profile;

  Credentials
    .update(userid, profile, newPassword)
    .then((updated) => res.json(updated))
    .catch((err) => res.status(400).send({ error: err.message }));
});

router.delete("/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;

  Credentials.remove(userid)
    .then(() => res.status(204).end())
    .catch((err) => res.status(404).send({ error: err.message || err }));
});

export default router;