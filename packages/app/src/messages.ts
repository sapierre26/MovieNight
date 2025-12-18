import { Message } from "@calpoly/mustang";
import { Credential } from "../../server/src/models/credential";

export type Msg =
  | [
      "profile/save",
      {
        username: string;
        profile: Partial<Credential>;
        newPassword?: string;
      },
        Message.Reactions
    ] // user edits to a profile that need to be saved
  | ["profile/request", { username: string }] // request to load a profile from the server
  | Cmd;

type Cmd =
  | ["profile/load", { username: string, profile: Credential }] // response from server with loaded profile

export interface Reactions {
    onSuccess?: () => void;
    onFailure?: (err: Error) => void;
}