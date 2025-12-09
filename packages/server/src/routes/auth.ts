import dotenv from "dotenv";
import express, {
  NextFunction,
  Request,
  Response
} from "express";
import jwt from "jsonwebtoken";

import credentials from "../services/credential-svc";
import movieGoers from "../services/movie-goer-svc"

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
  const { username, password, name, hometown, bio } = req.body; // from form

  if ( typeof username !== "string" ||
    typeof password !== "string" ||
    typeof name !== "string" ||
    typeof hometown !== "string" ||
    typeof bio !== "string"
  ) {
    res.status(400).send("Bad request: Invalid input data.");
  } 

  let profile: any; 

  credentials
    .create(username, password, name, hometown, bio)
    .then (() =>
        movieGoers.create({
          profileImg: "/images/user-placeholder.png",
          userid: username,
          name, 
          hometown, 
          bio
        }))
    .then((creds) => {
      profile = creds;
      return generateAccessToken(username)
    })
    .then((token) => {
      res.status(201).json({ 
        message: "Signup complete",
        token,
        profile });
    })
    .catch((err) => {
      res.status(409).send({ error: err.message });
    });
});

router.post("/login", (req: Request, res: Response) => {
  const { username, password } = req.body; // from form

  if (!username || !password) {
    res.status(400).send("Bad request: Invalid input data.");
  } 

  let profile: any; // generateAccessToken(goodUser)

  credentials
    .verify(username, password)
    .then(() => 
      movieGoers.get(username)
        .catch(() => 
            movieGoers.create({
              profileImg: "/images/user-placeholder.png",
              userid: username,
              name: "", 
              hometown: "", 
              bio: ""
            })
          )
        )
    .then((movieGoer) => {
      profile = movieGoer;
      return generateAccessToken(username)
    })
    .then((token) => res.status(200).json({ token, profile }))
    .catch((error) => res.status(401).send("Unauthorized"));
});

function generateAccessToken(
  username: string
): Promise<String> {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { username: username },
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