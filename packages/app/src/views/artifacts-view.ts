import { html, LitElement } from "lit";;
// import reset from "/styles/reset.css.ts";

export class ArtifactsViewElement extends LitElement {
  render() {
    return html`
        <artifact-library-grid src="/functions/artifacts-data.json"></artifact-library-grid>
    `;
  }
}
