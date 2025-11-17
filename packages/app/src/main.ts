import { Auth, define, History, Switch } from "@calpoly/mustang";
import { html, LitElement } from "lit";
// import { HeaderElement } from "/src/components/header.js";
// import { TheatersNearYouItemElement } from "/src/components/theaters-near-you-item.js";
// import { TheatersNearYouListElement } from "/src/components/theaters-near-you.js";

const routes = [
  {
    path: "/app/movies-out-now/:id",
    view: (params: Switch.Params) => html`
      <movies-out-now movie-id=${params.id}></movies-out-now>
    `
  },
  {
    path: "/app",
    view: () => html`
      <movies-out-now></movies-out-now>
    `
  },
  {
    path: "/",
    redirect: "/app"
  }
];

define({
  "mu-auth": Auth.Provider,
  "mu-history": History.Provider,
  // "theaters-near-you-list-item": TheatersNearYouItemElement,
  // "theaters-near-you-list": TheatersNearYouListElement,
  // "movie-header": HeaderElement,

  "mu-switch": class AppSwitch extends Switch.Element {
    constructor() {
      super(routes, "Blazing:history", "Blazing:auth");
    }
  },
});
