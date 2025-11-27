import { html, LitElement } from "lit";;
// import reset from "/styles/reset.css.ts";

export class SoundtrackViewElement extends LitElement {
  render() {
    return html`
        <soundtrack-library-grid src="/functions/soundtrack-data.json"></soundtrack-library-grid>
    `;
  }
}
