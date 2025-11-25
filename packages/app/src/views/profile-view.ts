// import { html, css, LitElement } from "lit";
// import { property, state } from "lit/decorators.js";
// import reset from "./styles/reset.css.ts";

// export class MovieGoerViewElement extends LitElement {
//   static uses = define({
//     "mu-form": Form.Element
//   });

//   @property(attribute: "user-id")
//   userid?: string;

//   @property()
//   mode = "view";

//   @state()
//   moviegoer?: MovieGoer;

//   get src() {
//     return `/api/movie-goers/${this.userid}`;
//   }