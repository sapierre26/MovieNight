import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
// import reset from "./styles/reset.css.ts";

export class SoundtrackLibraryGridItemElement extends LitElement {
  @property({ attribute: "img-src" })
  imgSrc?: string;

  @property({ attribute: "soundtrack-name" })
  soundtrackName?: string;

  @property()
  runtime?: string;

  @property()
  href?: string;

  override render() {
    return html`
      <article class="soundtrack-library-grid-item">
          <article class="soundtrack-library-grid-item-img">
              <slot name="img-src"><img src="${this.imgSrc}" alt="${this.soundtrackName}"></slot>
          </article>

          <article class="soundtrack-library-grid-item-text">
              <p><slot name="soundtrack-name">${this.soundtrackName}</slot></p>
              <p id="runtime"><slot name="duration">${this.runtime}</slot></p>
              <a href="${this.href}"><button><slot name="soundtrack-songs">Listen to Full Playlist</slot></button></a>
          </article>
      </article>
    `;
  }

  static styles = [
    // reset.styles,
    css`
      .soundtrack-library-grid-item {
        display: flex;
        padding: var(--padding-insider);
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 250px;
        width: 250px;
        height: auto;
        background-color: var(--color-main-background);
        border-radius: var(--border-radius-content);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        transition: transform 0.3s ease;
      }

      .soundtrack-library-grid-item:hover {
        transform: scale(1.03);
      }

      .soundtrack-library-grid-item-text {
        width: 200px;
      }

      #runtime {
        color: var(--color-main-support);
        font-family: var(--sub-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--p-font-size-smaller);
      }

      .soundtrack-library-grid-item-text button {
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
        border: var(--border-thickness-content) solid
          var(--color-sub-background);
        border-radius: var(--border-radius-content);
        cursor: pointer;
        transition: transform 0.3s ease;
      }

      .soundtrack-library-grid-item-text button:hover {
        background-color: var(--color-button-text);
        color: var(--color-sub-background);
        text-decoration: underline;
        transform: scale(1.03);
      }

      .soundtrack-library-grid-item-img img {
        width: 200px;
        height: 191px;
        object-fit: cover;
      }

      .soundtrack-library-grid-item-text p {
        color: var(--color-main-support);
        font-family: var(--sub-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h3-font-size);
      }
    `,
  ];
}
