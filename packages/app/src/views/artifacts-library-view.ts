import { html, LitElement } from "lit";

export class ArtifactsViewElement extends LitElement {
  render() {
    return html`
        <artifact-library-grid src="/api/famous-film-artifacts"></artifact-library-grid>
    `;
  }
}
