import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import reset from "./styles/reset.css.ts";

export class PlaylistItemElement extends LitElement {
  @property({ attribute: "img-src" })
  imgSrc?: string;

  @property({ attribute: "song-name" })
  songName?: string;

  @property({ attribute: "song-length" })
  songLength?: string;

  @property({ attribute: "credits" })
  credits?: string;

  @property()
  href?: string;

  override render() {
    return html`
        <article class="playlist-item">
            <article class="playlist-item-img">
                <slot name="img-src"><img src="${this.imgSrc}" alt="${this.songName}"></slot>
            </article>

            <article class="playlist-text">
              <h2><slot name="song-name">${this.songName}</slot></h2>
              <h3><slot name="song-length">${this.songLength}</slot></h3>

              <p><slot name="credits">Credits: ${this.credits}</slot></p>
              <a href="${this.href}"><svg class="icon" id="play-button"><use href="icons/movie-night.svg#icon-play-button" /></svg></a>
            </article>
        </article>
    `;
  }

  static styles = [
    reset.styles,
    css`
      .playlist-item {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        margin-top: 25px;
        transition: transform 0.3s ease;
      }

      .playlist-item:hover {
        transform: scale(1.03);
      }

      .playlist-item img {
        display: block;
        width: 100%;
        max-width: 500px;
        height: 100%;
        max-height: 500px;
        object-fit: cover;
        border-top-left-radius: var(--border-radius-content);
        border-bottom-left-radius: var(--border-radius-content);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }

      .playlist-text {
        flex: 1;
        position: relative;
        background-color: var(--color-main-background);
        padding: var(--padding-insider);
        // border: 1px solid var(--color-main-support);
        border-top-right-radius: var(--border-radius-content);
        border-bottom-right-radius: var(--border-radius-content);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }

      .playlist-text h2 {
        color: var(--color-main-support);
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h2-font-size);
      }

      .playlist-text h3 {
        color: var(--color-main-support);
        font-family: var(--main-alternative-font-family);
        font-weight: var(--main-alternative-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h3-font-size);
      }

      .playlist-text p {
        color: var(--color-main-support);
        font-family: var(--main-alternative-font-family);
        font-weight: var(--main-alternative-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--p-font-size);
      }

      #play-button {
        display: inline;
        width: 64px;
        height: 64px;
        vertical-align: top;
        fill: var(--color-main-support);
        position: absolute;
        bottom: 10px;
        right: 10px;
      }
    `,
  ];
}
