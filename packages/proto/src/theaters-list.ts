import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import "./theaters-list-item.js";

interface TheatersListItemData {
  theaterName: string;
  theaterInfo: string;
  moviePaths: Array<{ src: string; movieName: string }>;
  imgSrc: string;
  href: string;
  movieName: string;
}

export class TheatersListElement extends LitElement {
  @property()
  src?: string;

  @state()
  theatersListItems: Array<TheatersListItemData> = [];

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
          const theatersList = json as {
            theatersListItems: Array<TheatersListItemData>;
          };

          this.theatersListItems = theatersList.theatersListItems;
        }
      });
  }

  renderTheatersListItem(gridItem: TheatersListItemData) {
    return html`
      <theaters-list-item
        theater-name="${gridItem.theaterName}"
        theater-info="${gridItem.theaterInfo}"
        .moviePaths="${gridItem.moviePaths}"
        href="${gridItem.href}"
      >
      </theaters-list-item>
    `;
  }

  render() {
    return html`
      <div class="theaters-list">
        ${this.theatersListItems.map((item) =>
          this.renderTheatersListItem(item)
        )}
      </div>
    `;
  }

  static styles = css`
    .theaters-list {
        background-color: var(--color-main-background);
        margin: var(--margin-for-body);
    }
  `;
}
