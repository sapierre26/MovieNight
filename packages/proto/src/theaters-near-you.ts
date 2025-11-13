import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import "./theaters-near-you-item.js";

interface TheatersNearYouItemData {
  theaterName: string;
  theaterLocation: string;
  theaterWebsite: string;
}

export class TheatersNearYouListElement extends LitElement {
  @property()
  src?: string;

  @state()
  theatersNearYouItems: Array<TheatersNearYouItemData> = [];

  connectedCallback() {
    super.connectedCallback();
    if (this.src) this.hydrate(this.src);
  }

  hydrate(src: string) {
    fetch(src)
      .then((res) => res.json())
      .then((json: object) => {
        if (json) {
          // store the data as @state
          const theatersNearYouList = json as {
            theatersNearYouItems: Array<TheatersNearYouItemData>;
          };

          this.theatersNearYouItems = theatersNearYouList.theatersNearYouItems;
        }
      });
  }

  renderTheatersNearYouItem(gridItem: TheatersNearYouItemData) {
    return html`
      <theaters-near-you-list-item
        theater-name="${gridItem.theaterName}"
        theaterLocation="${gridItem.theaterLocation}"
        theaterWebsite="${gridItem.theaterWebsite}"
      >
      </theaters-near-you-list-item>
    `;
  }

  render() {
    return html`
      <div class="theaters-near-you-list">
        ${this.theatersNearYouItems.map((item) =>
          this.renderTheatersNearYouItem(item)
        )}
      </div>
    `;
  }

  static styles = css`
    .theaters-near-you-list {
        display: flex;
        flex: non-wrap;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        max-width: 100%;
        box-sizing: border-box;
    }
  `;
}