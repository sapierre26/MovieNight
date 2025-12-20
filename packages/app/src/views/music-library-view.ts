import { html, LitElement } from "lit";;
// import reset from "/styles/reset.css.ts";

export class MusicLibraryViewElement extends LitElement {
  render() {
    return html`
        <soundtrack-library-grid src="/api/music-library"></soundtrack-library-grid>
    `;
  }
}
