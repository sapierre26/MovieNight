import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import reset from "./styles/reset.css.ts";

export class HorizontalSliderItemElement extends LitElement {
  @property({ attribute: "img-src" })
  imgSrc?: string;

  @property({ attribute: "movie-name" })
  movieName?: string;

  @property()
  href?: string;

  override render() {
    return html`
        <span>
            <a href="${this.href}">
                <slot name="img-src"><img src="${this.imgSrc}" alt="${this.movieName}" /></slot>
            </a>
        </span>
    `;
  }

  static styles = [
    reset.styles,
    css`
      span {
        flex: 0 0 auto;
      }

      img {
        width: var(--width-slider-imgs);
        height: var(--height-slider-imgs);
        object-fit: cover;
      }
    `,
  ];
}
