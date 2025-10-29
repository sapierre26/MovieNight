import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";

export class SoundtrackLibraryGridItemElement extends LitElement {
    override render() {
        return html `
            <article class="soundtrack-library-grid-item">
                <article class="soundtrack-library-grid-item-img"><img src="movie-flyer-images-horizontal/star-wars.png" alt="Star Wars"></article>

                <article class="soundtrack-library-grid-item-text">
                    <p>Star Wars: A New Hope (Original Motion Pictures)</p>
                    <p id="runtime">1 hr 15 min</p>
                    <a href="soundtrack-item.html"><button>Listen to Full Playlist</button></a>
                </article>
            </article>
        `;
    }

    static styles = css``;
}