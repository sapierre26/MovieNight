import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import reset from "./styles/reset.css.ts";

export class MovieLibraryGridItemElement extends LitElement {
  @property({ attribute: "img-src" })
  imgSrc?: string;

  @property({ attribute: "movie-name" })
  movieName?: string;
  
  @property({ attribute: "squares", type: Number })
  squares = 0;

  @property({ attribute: "movie-info" })
  movieInfoButton?: string;

  override render() {
    return html`
        <article class="movie-library-grid-item">
            <article class="movie-library-grid-item-img">
                <slot name="img-src"><img src="${this.imgSrc}" alt="${this.movieName}"></slot>
            </article> 

            <article class="movie-library-grid-item-text">
                <p><slot name="movie-name">${this.movieName}</slot></p>
                <div class="squares">
                    ${Array(this.squares)
                        .fill(0)
                        .map(() => html`
                            <div class="square"></div>
                        `)
                    }
                </div>

                <a href="${this.movieInfoButton}"><button><slot name="movie-info">Movie Info</slot></button></a>
            </article>
        </article>
    `;
  }

  static styles = [
    reset.styles,
    css`
        .movie-library-grid-item {
            display: flex;
            padding: var(--padding-insider);
            flex: 1;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 250px;
            height: auto;
            background-color: var(--color-main-background);
            border-radius: var(--border-radius-content);
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            transition: transform 0.3s ease;
        }

        .movie-library-grid-item:hover {
            transform: scale(1.03);
        }

        .movie-library-grid-item-img img {
            width: 200px;
            height: 191px;
            object-fit: cover;
        }

        .movie-library-grid-item-text p {
            color: var(--color-main-support);
            font-family: var(--sub-font-family);
            font-weight: var(--main-font-weight);
            font-style: var(--main-font-type);
            font-size: var(--h3-font-size);
        }

        .squares {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            gap: 1rem;
            padding-bottom: 15px;
        }

        .square {
            width: 20px;
            height: 20px;
            background-color: var(--color-main-support);
        }

        .movie-library-grid-item button {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--color-sub-background);
            color: var(--color-button-text);
            text-align: center;
            text-decoration: none;
            width: 200px;
            height: 30px;
            font-family: var(--sub-font-family);
            font-weight: var(--main-font-weight);
            font-style: var(--main-font-type);
            font-size: var(--p-font-size);
            border: var(--border-thickness-content) solid var(--color-sub-background);
            border-radius: var(--border-radius-content);
            cursor: pointer;
            transition: transform 0.3s ease;
        }

        .movie-library-grid-item button:hover {
            background-color: var(--color-button-text);
            color: var(--color-sub-background);
            text-decoration: underline;
            transform: scale(1.03);
        }
    `,
  ];
}
