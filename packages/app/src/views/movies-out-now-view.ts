import { html, LitElement } from "lit";

export class MoviesOutNowViewElement extends LitElement {
    render() {
        return html`
            <movies-out-now-grid src="/functions/movies-out-now-data.json"></movies-out-now-grid>
        `
    }
}