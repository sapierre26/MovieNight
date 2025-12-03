import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import "./music-library-grid-item.js";

interface SoundtrackLibraryGridItemData {
  imgSrc?: string;
  soundtrackName: string;
  runtime: string;
}

export class SoundtrackLibraryGridElement extends LitElement {
  @property()
  src?: string;

  @state()
  soundtrackGridItems: Array<SoundtrackLibraryGridItemData> = [];

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
          const soundtrackLibraryGrid = json as {
            soundtrackGridItems: Array<SoundtrackLibraryGridItemData>;
          };

          this.soundtrackGridItems = soundtrackLibraryGrid.soundtrackGridItems;
        }
      });
  }

  renderSoundtrackLibraryGridItem(gridItem: SoundtrackLibraryGridItemData) {
    return html`
      <soundtrack-library-grid-item
        img-src="${gridItem.imgSrc}"
        soundtrack-name="${gridItem.soundtrackName}"
        runtime="${gridItem.runtime}"
      >
      </soundtrack-library-grid-item>
    `;
  }

  render() {
    return html`
      <div class="soundtrack-library-grid">
        ${this.soundtrackGridItems.map((item) =>
          this.renderSoundtrackLibraryGridItem(item),
        )}
      </div>
    `;
  }

  static styles = css`
    .soundtrack-library-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, 250px);
      gap: 2rem;
      padding: var(--padding-body);
      justify-content: center;
    }
  `;
}
