import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
// import reset from "/styles/reset.css.ts";

export class MovieLibraryItemViewElement extends LitElement {
    @property()
    src?: string;

    @property()
    movieName!: string;

    @property()
    releaseYear?: string;

    @property()
    runtime?: string;

    @property({ attribute: "img-src" })
    imgSrc?: string;

    @property()
    director?: string;

    @property()
    producer?: string;

    @property()
    writers?: string;

    @property()
    cinematography?: string;

    @property()
    music?: string;

    @property()
    starring?: Array<{ actorName: string; }>

    @property()
    distributor?: string;

    @property()
    plot?: string;

    connectedCallback() {
        super.connectedCallback();
        if (this.src) this.getMovieDetails(this.src);
    } 

    getMovieDetails(src: string) {
        fetch(src)
        .then((res) => res.json())
        .then((json: object) => {
            if (json) {
                const movies = (json as any[]).find((item) => item.movieName === this.movieName);
                this.movieName = movies.moviename;
                this.releaseYear = movies.releaseYear;
                this.runtime = movies.runtime;
                this.imgSrc = movies.imgSrc;
                this.director = movies.director;
                this.producer = movies.producer;
                this.writers = movies.writers;
                this.cinematography = movies.cinematography;
                this.music = movies.music;
                this.starring = movies.starring;
                this.distributor = movies.distributor;
                this.plot = this.plot;
            }
        });
    }

    render() {
        return html`
            <div class="movie-bio">
                <section class="movie-bio-background">
                    <h1>${this.movieName}</h1>
                    <h2>${this.releaseYear} | ${this.runtime}</h2>

                    <img src="${this.imgSrc}" alt="${this.movieName}" />

                    <div class="movie-bio-text">
                        <p>Director: ${this.director}</p>
                        <p>Producer(s): ${this.producer}</p>
                        <p>Writer(s): ${this.writers}</p>
                        <p>Cinematography: ${this.cinematography}</p>
                        <p>Music By: ${this.music}</p>
                        <p>
                            Starring: ${this.starring}
                        </p>
                        <p>Distributed By: ${this.distributor}</p>
                        <p>
                            Plot Summary: ${this.plot}
                        </p>
                    </div>
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
