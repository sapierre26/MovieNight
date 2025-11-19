import { html, LitElement } from "lit";

export class TheatersViewElement extends LitElement {
  render() {
    return html`
      <theaters-list src="/functions/theaters-data.json"></theaters-list>
    `;
  }
}
