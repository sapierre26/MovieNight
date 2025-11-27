import { html, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import "./theaters-subitem.js";

interface TheatersSubItemData {
  theaterName: string;
  theaterLocation: string;
  distanceFromYou: string;
  movieTimes: Array<{ movieTime: string }>;
  movieTime: string;
}

export class TheatersSubItemListElement extends LitElement {
  @property()
  src?: string;

  @state()
  theatersSubItems: Array<TheatersSubItemData> = [];

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
          const theatersSubitemList = json as {
            theatersSubItems: Array<TheatersSubItemData>;
          };

          this.theatersSubItems = theatersSubitemList.theatersSubItems;
        }
      });
  }

  renderTheatersSubItem(gridItem: TheatersSubItemData) {
    return html`
      <theaters-subitem
        theater-name="${gridItem.theaterName}"
        theater-location="${gridItem.theaterLocation}"
        distance-from-you="${gridItem.distanceFromYou}"
        .movieTimes="${gridItem.movieTimes}"
      >
      </theaters-subitem>
    `;
  }

  render() {
    return html`
      <div class="theaters-subitem-list">
        ${this.theatersSubItems.map((item) =>
          this.renderTheatersSubItem(item)
        )}
      </div>
    `;
  }
}
