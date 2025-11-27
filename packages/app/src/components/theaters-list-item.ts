// Used on the theaters.html page

import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
// import reset from "./styles/reset.css.ts";

export class TheatersListItemElement extends LitElement {
  @property({ attribute: "theater-name" })
  theaterName?: string;

  @property({ attribute: "theater-info" })
  theaterInfo?: string;

  @property({ type: Array })
  moviePaths: Array<{ href: string; imgSrc: string; movieName: string }> = [];

  @property({ attribute: "img-src" })
  imgSrc?: string;

  @property()
  href?: string;

  @property()
  movieName?: string;

  override render() {
    return html`
      <section class="theater-list-item">
        <h2><slot name="theater-name">${this.theaterName}</slot></h2>
        <h3><slot name="theater-info">${this.theaterInfo}</slot></h3>
        <a href="movies-out-now.html"
          ><h3>
            <slot name="see-movies-everywhere">SEE MOVIES EVERYWHERE</slot>
          </h3></a
        >

        <div class="theaters-gallery">
          ${this.moviePaths.map(
            (movie) => html`
              <a href="${movie.href}"
                ><slot name="img-src"><img src="${movie.imgSrc}" alt="${movie.movieName}" /></slot></a>
            `
          )}
        </div>
      </section>
    `;
  }

  static styles = [
    // reset.styles,
    css`
      .theater-list-item {
        margin-top: 25px;
        padding: var(--padding-insider);
        width: auto;
        height: auto;
        border-radius: var(--border-radius-content);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        transition: transform 0.3s ease;
      }

      .theater-list-item:hover {
        transform: scale(1.03);
      }

      .theater-list-item h2 {
        color: var(--color-main-support);
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h2-font-size);
      }

      .theater-list-item h3 {
        color: var(--color-main-support);
        font-family: var(--main-alternative-font-family);
        font-weight: var(--main-alternative-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h3-font-size);
      }

      .theaters-gallery {
        display: flex;
        justify-content: start;
        gap: 1rem;
        width: auto;
        height: auto;
      }

      .theaters-gallery img {
        width: var(--width-theater-imgs);
        height: var(--height-theater-imgs);
        object-fit: cover;
      }
    `,
  ];
}
