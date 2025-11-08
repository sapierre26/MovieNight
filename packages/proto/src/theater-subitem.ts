import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import reset from "./styles/reset.css.ts";

export class TheaterSubItemElement extends LitElement {
  @property({ attribute: "theater-name" })
  theaterName?: string;

  @property({ attribute: "theater-location" })
  theaterLocation?: string;

  @property({ attribute: "distance-from-you" })
  distanceFromYou?: string;

  @property({ type: Array })
  movieTimes: Array<{ movieTime: string }> = [];

  @property({ attribute: "movie-time" })
  movieTime?: string;

  override render() {
    return html`
      <section class="theater-item">
        <h2><slot name="theater-name">${this.theaterName}</slot></h2>
        <h3>${this.theaterLocation} | ${this.distanceFromYou}</h3>

        <div class="showing-times">
          ${this.movieTimes.map(
            (showTime) => html`
              <button>
                <slot name="movie-time">${showTime.movieTime}</slot>
              </button>
            `,
          )}
        </div>
      </section>
    `;
  }

  static styles = [
    reset.styles,
    css`
      .theater-item {
        margin-top: 25px;
        padding: var(--padding-insider);
        width: auto;
        height: auto;
        border: var(--border-thickness-content) solid var(--color-main-support);
        border-radius: var(--border-radius-content);
      }

      .theater-item h2 {
        color: var(--color-main-support);
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h2-font-size);
      }

      .theater-item h3 {
        color: var(--color-main-support);
        font-family: var(--main-alternative-font-family);
        font-weight: var(--main-alternative-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h3-font-size);
      }

      .showing-times {
        display: flex;
        flex-direction: row;
        gap: 1rem;
      }

      .showing-times button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-sub-background);
        color: var(--color-button-text);
        text-align: center;
        text-decoration: none;
        width: 100px;
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

      .showing-times button:hover {
        background-color: var(--color-button-text);
        color: var(--color-sub-background);
        text-decoration: underline;
        transform: scale(1.03);
      }
    `,
  ];
}
