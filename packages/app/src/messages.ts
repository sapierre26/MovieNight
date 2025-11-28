import { MovieGoer } from "../../server/src/models/movie-goer";

export type Msg =
//   | ["profile/save", { userid: string; profile: MovieGoer }]
  | ["profile/request", { userid: string }]
  | Cmd;

type Cmd =
  | ["profile/load", { userid: string, profile: MovieGoer }]