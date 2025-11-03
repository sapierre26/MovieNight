import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import "./artifacts-library-grid-item.js";

interface ArtifactLibraryGridItemData {
  imgSrc?: string;
  artifactName: string;
  artifactDescription: string;
}

export class ArtifactLibraryGridElement extends LitElement {
  @property()
  src?: string;

  @state()
  artifactGridItems: Array<ArtifactLibraryGridItemData> = [];

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
          const artifactLibraryGrid = json as {
            artifactGridItems: Array<ArtifactLibraryGridItemData>;
          };

          this.artifactGridItems = artifactLibraryGrid.artifactGridItems;
        }
      });
  }

  renderArtifactLibraryGridItem(gridItem: ArtifactLibraryGridItemData) {
    return html`
      <artifact-library-grid-item
        img-src="${gridItem.imgSrc}"
        artifact-name="${gridItem.artifactName}"
        artifact-description="${gridItem.artifactDescription}"
      >
      </artifact-library-grid-item>
    `;
  }

  render() {
    return html`
      <div class="artifact-library-grid">
        ${this.artifactGridItems.map((item) =>
          this.renderArtifactLibraryGridItem(item)
        )}
      </div>
    `;
  }

  static styles = css`
    .artifact-library-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, 250px);
        gap: 2rem;
        padding: var(--padding-body);
        justify-content: center;
    }
  `;
}