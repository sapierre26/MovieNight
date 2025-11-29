import { Message } from "@calpoly/mustang";
import { MovieGoer } from "../../server/src/models/movie-goer";

export type Msg =
  | [
      "profile/save",
      {
        userid: string,
        profile: MovieGoer
      },
        Message.Reactions
    ] // user edits to a profile that need to be saved
  | ["profile/request", { userid: string }] // request to load a profile from the server
  | Cmd;

type Cmd =
  | ["profile/load", { userid: string, profile: MovieGoer }] // response from server with loaded profile

export interface Reactions {
    onSuccess?: () => void;
    onFailure?: (err: Error) => void;
}