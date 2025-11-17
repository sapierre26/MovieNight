import { html, LitElement } from "lit";

export class SoundtrackLibraryViewElement extends LitElement {
    render() {
        return html`
            <soundtrack-library-grid src="/functions/soundtrack-data.json"></soundtrack-library-grid>
        `
    }
}