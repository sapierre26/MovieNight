import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
// import reset from "/styles/reset.css.ts";

export class MoviesOutNowItemViewElement extends LitElement {
    @property()
    src?: string;

    @property()
    outNowName!: string;

    @property()
    releaseYear?: string;

    @property()
    runtime?: string;

    @property({ attribute: "img-src" })
    imgSrc?: string;

    connectedCallback() {
        super.connectedCallback();
        if (this.src) this.getMovieDetails(this.src);
    } 

    getMovieDetails(src: string) {
        fetch(src)
        .then((res) => res.json())
        .then((json: object) => {
            if (json) {
                const outNowMovies = (json as any[]).find((item) => item.outNowName === this.outNowName);
                this.outNowName = outNowMovies.outNowName;
                this.releaseYear = outNowMovies.releaseYear;
                this.runtime = outNowMovies.runtime;
                this.imgSrc = outNowMovies.imgSrc;
            }
        });
    }

    render() {
        return html`
            <div class="movie-bio">
                <section class="movie-bio-background">
                    <h1>${this.outNowName}</h1>
                    <h2>${this.releaseYear} | ${this.runtime}</h2>

                    <img src="${this.imgSrc}" alt="${this.outNowName}">
                    <theaters-subitem-list src="/functions/theaters-subitem-data.json"></theaters-subitem-list>
                </section> 
            </div>
        `;
    }

    static styles = [
        // reset.styles,
        css`
            .movie-bio-background {
                background-color: var(--color-main-background);
                margin: var(--margin-for-body);
                padding: var(--padding-insider);
                border-radius: var(--border-radius-content);
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            }

            .movie-bio-background h1 {
                color: var(--color-main-support);
                font-family: var(--main-font-family);
                font-weight: var(--main-font-weight);
                font-style: var(--main-font-type);
                font-size: var(--h1-font-size);
            }

            .movie-bio-background h2 {
                color: var(--color-main-support);
                font-family: var(--main-font-family);
                font-weight: var(--main-font-weight);
                font-style: var(--main-font-type);
                font-size: var(--h2-font-size);
            }

            .movie-bio-background img {
                width: 1000px;
                height: auto;
            }

            .movie-bio-text {
                margin-top: 25px;
            }

            .movie-bio-text p {
                color: var(--color-main-support);
                font-family: var(--main-alternative-font-family);
                font-weight: var(--main-alternative-font-weight);
                font-style: var(--main-font-type);
                font-size: var(--p-font-size-bigger);
            }
        `
    ]
}
