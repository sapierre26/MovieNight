import { html, LitElement } from "lit";

export class ArtifactsViewElement extends LitElement {
    render() {
        return html`
            <artifact-library-grid src="/functions/artifacts-data.json"></artifact-library-grid>
        `
    }
}