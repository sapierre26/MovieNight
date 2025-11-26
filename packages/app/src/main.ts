import { Auth, define, History, Switch } from "@calpoly/mustang";
import { html } from "lit";
import { HeaderElement } from "./components/header.js";
import { HomeViewElement } from "./views/home-view";
import { MovieGoerViewElement } from  "./views/profile-view";

const routes = [
  {
    path: "/app/profile/:id",
    view: (params: Switch.Params) => html`
      <profile-view userId="${params.id}"></profile-view>
    `
  },
  {
    path: "/app/profile",
    view: () => html`
      <profile-view></profile-view>
    `
  },
  {
    path: "/app",
    view: () => html`
      <home-view></home-view>
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
  "mu-switch": class AppSwitch extends Switch.Element {
    constructor() {
    super(routes, "Blazing:history", "Blazing:auth");
    }
  },
  "movie-header": HeaderElement,
  "home-view": HomeViewElement,
  "profile-view": MovieGoerViewElement
});
