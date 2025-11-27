import { html, LitElement } from "lit";;
// import reset from "/styles/reset.css.ts";

export class TheatersViewElement extends LitElement {
  render() {
    return html`
        <theaters-list src="/functions/theaters-data.json"></theaters-list>
    `;
  }
}
