import { MovieGoer } from "../../server/src/models/movie-goer";

export interface Model {
    profile?: MovieGoer;
}

export const init: Model = {};