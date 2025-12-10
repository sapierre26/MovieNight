import { Credential } from "../../server/src/models/credential";

export interface Model {
    profile?: Credential;
}

export const init: Model = {};