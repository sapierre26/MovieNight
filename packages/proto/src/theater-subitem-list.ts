import { html, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import "./theater-subitem.js";

interface TheaterSubItemData {
  theaterName: string;
  theaterLocation: string;
  distanceFromYou: string;
  movieTimes: Array<{ movieTime: string }>;
  movieTime: string;
}

export class TheaterSubItemListElement extends LitElement {
  @property()
  src?: string;

  @state()
  theaterSubItems: Array<TheaterSubItemData> = [];

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
          const theaterSubitemList = json as {
            theaterSubItems: Array<TheaterSubItemData>;
          };

          this.theaterSubItems = theaterSubitemList.theaterSubItems;
        }
      });
  }

  renderTheaterSubItem(gridItem: TheaterSubItemData) {
    return html`
      <theater-subitem
        theater-name="${gridItem.theaterName}"
        theater-location="${gridItem.theaterLocation}"
        distance-from-you="${gridItem.distanceFromYou}"
        .movieTimes="${gridItem.movieTimes}"
      >
      </theater-subitem>
    `;
  }

  render() {
    return html`
      <div class="theater-subitem-list">
        ${this.theaterSubItems.map((item) =>
          this.renderTheaterSubItem(item)
        )}
      </div>
    `;
  }
}
