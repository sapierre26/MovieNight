import { Auth, ThenUpdate } from "@calpoly/mustang";
import { Credential } from "../../server/src/models/credential";
import { Msg } from "./messages";
import { Message } from "@calpoly/mustang";
import { Model } from "./model";

export default function update(
  message: Msg,
  model: Model,
  user: Auth.User
): Model | ThenUpdate<Model, Msg> {
    const [command, payload, callbacks] = message;
    const unhandled = message[0];
    
    switch ( command ) {
        case "profile/save": {
            const { username } = payload;
            return [
              model, 
              saveProfile(payload, user, callbacks).then((profile) => [
                  "profile/load", { username, profile }
              ])
            ];
        }
        case "profile/request": {
            const { username } = payload;
            return [
                model,
                requestProfile(payload, user)
                .then((profile) => ["profile/load", { username, profile }])
            ];
        }
        case "profile/load": {
            const { profile } = payload as { username: string; profile: Credential };
            return { ...model, profile };
        }
        // put the rest of your cases here
        default:
        throw new Error(`Unhandled Auth message "${unhandled}"`);
    }
}

function requestProfile(
  payload: { username: string },
  user: Auth.User
) {
  return fetch(`/api/movie-goers/${payload.username}`, {
    headers: Auth.headers(user)
  })
    .then((response: Response) => {
      if (response.status === 200) return response.json();
      throw "No Response from server";
    })
    .then((json: unknown) => {
      if (json) return json as Credential;
      throw "No JSON in response from server";
    });
}

function saveProfile(
  msg: {
    username: string;
    profile: Partial<Credential>;
    newPassword?: string;
  },
  user: Auth.User,
  callbacks: Message.Reactions
): Promise<Credential> {
  const bodyToSend = {
    ...msg.profile,
    newPassword: msg.newPassword
  };
  return fetch(`/api/movie-goers/${msg.username}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...Auth.headers(user)
    },
    body: JSON.stringify(bodyToSend)
  })
    .then((response: Response) => {
      if (response.status === 200) return response.json();
      throw new Error(
        `Failed to save profile for ${msg.username}`
      );
    })
    .then((json: unknown) => {
      if (json) {
        if (callbacks.onSuccess) callbacks.onSuccess();
        return json as Credential;
      }
      throw new Error(
        `No JSON in API response`
      )
    })
    .catch((err) => {
      if (callbacks.onFailure) callbacks.onFailure(err);
      throw err;
    });
}