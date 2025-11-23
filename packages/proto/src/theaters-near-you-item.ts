import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import reset from "./styles/reset.css.ts";

export class TheatersNearYouItemElement extends LitElement {
  @property({ attribute: "theater-name" })
  theaterName?: string;

  @property()
  theaterLocation?: string;

  @property()
  theaterDistance?: string;

  @property({ attribute: "theater-website" })
  theaterWebsite?: string;

  override render() {
    return html`
        <article class="theaters-near-you-list-item">
            <h2><slot name="theater-name">${this.theaterName}</slot></h2>
            <h3>${this.theaterLocation}</h3>
            <a href="${this.theaterWebsite}"><slot name="theater-website">Visit My Site!</slot></a>
        </article>
    `;
  }

  static styles = [
    reset.styles,
    css`
        .theaters-near-you-list-item {
            padding: var(--padding-insider);
            width: 450px;
            height: auto;
            border-radius: var(--border-radius-content);
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            transition: transform 0.3s ease;
        }
        
        .theaters-near-you-list-item:hover {
            transform: scale(1.03);
        }

        .theaters-near-you-list-item h2 {
            margin-bottom: 5px;
            color: var(--color-main-support);
            font-family: var(--main-font-family);
            font-weight: var(--main-font-weight);
            font-style: var(--main-font-type);
            font-size: var(--h2-font-size);
        }

        .theaters-near-you-list-item h3 {
            margin-top: 5px;
            color: var(--color-main-support);
            font-family: var(--main-font-family);
            font-weight: var(--main-font-weight);
            font-style: var(--main-font-type);
            font-size: var(--h3-font-size);
        }

        .theaters-near-you-list-item a {
            text-decoration: none;
            color: var(--color-main-support);
            font-family: var(--sub-font-family);
            font-weight: var(--main-font-weight);
            font-style: var(--main-font-type);
            font-size: var(--p-font-size);
        }
    `,
  ];
}
