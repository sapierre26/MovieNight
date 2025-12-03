import { Auth, define, History, Switch, Store } from "@calpoly/mustang";
import { html } from "lit";
import { Msg } from "./messages";
import { Model, init } from "./model";
import update from "./update";
import { HeaderElement } from "./components/header.js";
import { HomeViewElement } from "./views/home-view";
import { MovieGoerViewElement } from "./views/profile-view";
import { MoviesOutNowViewElement } from "./views/movies-out-now-view";
import { MoviesOutNowItemViewElement } from "./views/movies-out-now-item-view";
import { MovieLibraryViewElement } from "./views/movie-library-view";
import { MovieLibraryItemViewElement } from "./views/movie-library-item-view.js";
import { TheatersViewElement } from "./views/theaters-view";
import { TheatersItemViewElement } from "./views/theaters-item-view.js";
import { MusicLibraryViewElement } from "./views/music-library-view.js";
import { MusicLibraryItemViewElement } from "./views/music-library-item-view.js";
import { ArtifactsViewElement } from "./views/artifacts-view";
import { FilmLocationsViewElement } from "./views/film-locations-view.js";

import { HorizontalSliderElement } from "./components/horizontal-slider.js";
import { MoviesOutNowGridItemElement } from "./components/movies-out-now-grid-item.js";
import { MoviesOutNowGridElement } from "./components/movies-out-now-grid.js";
import { TheatersSubItemElement } from "./components/theaters-subitem.js";
import { TheatersSubItemListElement } from "./components/theaters-subitem-list.js";
import { MovieLibraryGridItemElement } from "./components/movie-library-grid-item.js";
import { MovieLibraryGridElement } from "./components/movie-library-grid.js";
import { TheatersNearYouItemElement } from "./components/theaters-near-you-item.js";
import { TheatersNearYouListElement } from "./components/theaters-near-you.js";
import { TheatersListItemElement } from "./components/theaters-list-item.js";
import { TheatersListElement } from "./components/theaters-list.js";
import { TheaterSubItemElement } from "./components/theater-subitem.js";
import { TheaterSubItemListElement } from "./components/theater-subitem-list.js";
import { SoundtrackLibraryGridItemElement } from "./components/music-library-grid-item.js";
import { SoundtrackLibraryGridElement } from "./components/music-library-grid.js";
import { ArtifactLibraryGridItemElement } from "./components/artifacts-library-grid-item.js";
import { ArtifactLibraryGridElement } from "./components/artifacts-library-grid.js";

const routes = [
  {
    path: "/movie-night/famous-film-locations",
    view: () => html` <film-locations-view></film-locations-view> `,
  },
  {
    path: "/movie-night/famous-film-artifacts",
    view: () => html` <artifacts-view></artifacts-view> `,
  },
  {
    path: "/movie-night/music-library/:soundtrackName",
    view: (params: Switch.Params) => html`
      <music-library-item-view
        soundtrackName="${params.soundtrackName}"
        src="/functions/soundtrack-item-data.json"
      ></music-library-item-view>
    `,
  },
  {
    path: "/movie-night/music-library",
    view: () => html` <music-library-view></music-library-view> `,
  },
  {
    path: "/movie-night/theaters/:movieName",
    view: (params: Switch.Params) => html`
      <theaters-item-view
        movieName="${params.movieName}"
        src="/functions/theaters-item-data.json"
      ></theaters-item-view>
    `,
  },
  {
    path: "/movie-night/theaters",
    view: () => html` <theaters-view></theaters-view> `,
  },
  {
    path: "/movie-night/movie-library/:movieName",
    view: (params: Switch.Params) => html`
      <movie-library-item-view
        movieName="${params.movieName}"
        src="/functions/movie-library-item-data.json"
      ></movie-library-item-view>
    `,
  },
  {
    path: "/movie-night/movie-library",
    view: () => html` <movie-library-view></movie-library-view> `,
  },
  {
    path: "/movie-night/movies-out-now/:outNowName",
    view: (params: Switch.Params) => html`
      <movies-out-now-item-view
        outNowName="${params.outNowName}"
        src="/functions/movies-out-now-item-data.json"
      ></movies-out-now-item-view>
    `,
  },
  {
    path: "/movie-night/movies-out-now",
    view: () => html` <movies-out-now-view></movies-out-now-view> `,
  },
  {
    // auth: "protected",
    path: "/movie-night/user-profile/:userid/edit",
    view: (params: Switch.Params) => html`
      <profile-view userid="${params.userid}" mode="edit"></profile-view>
    `,
  },
  {
    path: "/movie-night/user-profile/:userid",
    view: (params: Switch.Params) => html`
      <profile-view userid="${params.userid}" mode="view"></profile-view>
    `,
  },
  {
    path: "/movie-night/user-profile",
    view: () => html` <profile-view></profile-view> `,
  },
  {
    path: "/movie-night",
    view: () => html` <home-view></home-view> `,
  },
  {
    path: "/",
    redirect: "/movie-night",
  },
];

define({
  "mu-auth": Auth.Provider,
  "mu-history": History.Provider,
  "mu-switch": class AppSwitch extends Switch.Element {
    constructor() {
      super(routes, "Blazing:history", "Blazing:auth");
    }
  },
  "mu-store": class AppStore extends Store.Provider<Model, Msg> {
    constructor() {
      super(update, init, "Blazing:auth");
    }
  },
  "movie-header": HeaderElement,
  "home-view": HomeViewElement,
  "profile-view": MovieGoerViewElement,
  "movies-out-now-view": MoviesOutNowViewElement,
  "movies-out-now-item-view": MoviesOutNowItemViewElement,
  "movie-library-view": MovieLibraryViewElement,
  "movie-library-item-view": MovieLibraryItemViewElement,
  "theaters-view": TheatersViewElement,
  "theaters-item-view": TheatersItemViewElement,
  "music-library-view": MusicLibraryViewElement,
  "music-library-item-view": MusicLibraryItemViewElement,
  "artifacts-view": ArtifactsViewElement,
  "film-locations-view": FilmLocationsViewElement,

  "horizontal-slider": HorizontalSliderElement,
  "movies-out-now-grid-item": MoviesOutNowGridItemElement,
  "movies-out-now-grid": MoviesOutNowGridElement,
  "theaters-subitem": TheatersSubItemElement,
  "theaters-subitem-list": TheatersSubItemListElement,
  "movie-library-grid-item": MovieLibraryGridItemElement,
  "movie-library-grid": MovieLibraryGridElement,
  "theaters-near-you-list-item": TheatersNearYouItemElement,
  "theaters-near-you-list": TheatersNearYouListElement,
  "theaters-list-item": TheatersListItemElement,
  "theaters-list": TheatersListElement,
  "theater-subitem": TheaterSubItemElement,
  "theater-subitem-list": TheaterSubItemListElement,
  "soundtrack-library-grid-item": SoundtrackLibraryGridItemElement,
  "soundtrack-library-grid": SoundtrackLibraryGridElement,
  "artifact-library-grid-item": ArtifactLibraryGridItemElement,
  "artifact-library-grid": ArtifactLibraryGridElement,
});
