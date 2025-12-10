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
            const { userid } = payload;
            return [
              model, 
              saveProfile(payload, user, callbacks).then((profile) => [
                  "profile/load", { userid, profile }
              ])
            ];
        }
        case "profile/request": {
            const { userid } = payload;
            return [
                model,
                requestProfile(payload, user)
                .then((profile) => ["profile/load", { userid, profile }])
            ];
        }
        case "profile/load": {
            const { profile } = payload as { userid: string; profile: Credential };
            return { ...model, profile };
        }
        // put the rest of your cases here
        default:
        throw new Error(`Unhandled Auth message "${unhandled}"`);
    }
}

function requestProfile(
  payload: { userid: string },
  user: Auth.User
) {
  return fetch(`/api/movie-goers/${payload.userid}`, {
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
    userid: string;
    profile: Partial<Credential>;
    newPassword?: string;
  },
  user: Auth.User,
  callbacks: Message.Reactions
): Promise<Credential> {
  return fetch(`/api/movie-goers/${msg.userid}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...Auth.headers(user)
    },
    body: JSON.stringify({
      profile: msg.profile,
      newPassword: msg.newPassword
    })
  })
    .then((response: Response) => {
      if (response.status === 200) return response.json();
      throw new Error(
        `Failed to save profile for ${msg.userid}`
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