import dotenv from "dotenv";
import express, {
  NextFunction,
  Request,
  Response
} from "express";
import jwt from "jsonwebtoken";

import credentials from "../services/credential-svc";

const router = express.Router();

dotenv.config();
const TOKEN_SECRET: string =
  process.env.TOKEN_SECRET || "NOT_A_SECRET";

export function authenticateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers["authorization"];
  //Getting the 2nd part of the auth header (the token)
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).end();
  } else {
    jwt.verify(token, TOKEN_SECRET, (error, decoded) => {
      if (decoded) next();
      else res.status(401).end();
    });
  }
}

router.post("/register", (req: Request, res: Response) => {
  const { userid, password, image, name, hometown, bio } = req.body; // from form

  if ( typeof userid !== "string" ||
    typeof password !== "string" ||
    typeof image !== "string" ||
    typeof name !== "string" ||
    typeof hometown !== "string" ||
    typeof bio !== "string"
  ) {
    return res.status(400).send("Bad request: Invalid input data.");
  } else {
    credentials
      .create(userid, password, image, name, hometown, bio)
      .then((creds) => generateAccessToken(creds.userid))
      .then((token) => {
        return res.status(201).send({ token: token });
      })
      .catch((err) => {
        return res.status(409).send({ error: err.message });
      });
  }
});

router.post("/login", (req: Request, res: Response) => {
  const { userid, password } = req.body; // from form

  if (!userid || !password) {
    res.status(400).send("Bad request: Invalid input data.");
  } else {
    credentials
      .verify(userid, password)
      .then((goodUser: string) => generateAccessToken(goodUser))
      .then((token) => res.status(200).send({ token: token }))
      .catch((error) => res.status(401).send("Unauthorized"));
  }
});

function generateAccessToken(
  userid: string
): Promise<String> {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { userid: userid },
      TOKEN_SECRET,
      { expiresIn: "1d" },
      (error, token) => {
        if (error) reject(error);
        else resolve(token as string);
      }
    );
  });
}

export default router;