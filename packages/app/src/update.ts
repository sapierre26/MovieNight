import { Auth, ThenUpdate } from "@calpoly/mustang";
import { MovieGoer } from "../../server/src/models/movie-goer";
import { Msg } from "./messages";
import { Model } from "./model";

export default function update(
  message: Msg,
  model: Model,
  user: Auth.User
): Model | ThenUpdate<Model, Msg> {
    const [command, payload] = message;
    const unhandled = message[0];
    
    switch ( command ) {
        case "profile/save": {
            const { userid } = payload;
            return [model, saveProfile(payload, user).then((profile) =>  [
                "profile/load", {userid, profile}
                ])
            ];
        }
        case "profile/request": {
            const { userid } = payload;
            if (model.profile?.userid === userid ) return model;
            return [
                { ...model, profile: {userid} as MovieGoer},
                requestProfile(payload, user)
                .then((profile) => ["profile/load", { userid, profile }])
            ];
        }
        case "profile/load": {
            const { profile } = payload as { userid: string; profile: MovieGoer };
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
      if (json) return json as MovieGoer;
      throw "No JSON in response from server";
    });
}

function saveProfile(
  msg: {
    userid: string;
    profile: MovieGoer;
  },
  user: Auth.User,
): Promise<MovieGoer> {
  return fetch(`/api/movie-goers/${msg.userid}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...Auth.headers(user)
    },
    body: JSON.stringify(msg.profile)
  })
    .then((response: Response) => {
      if (response.status === 200) return response.json();
      throw new Error(
        `Failed to save profile for ${msg.userid}`
      );
    })
    .then((json: unknown) => {
      if (json) {
        return json as MovieGoer;
      }
      throw new Error(
        `No JSON in API response`
      )
    })
}