import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
// import reset from "./styles/reset.css.ts";

export class ArtifactLibraryGridItemElement extends LitElement {
  @property({ attribute: "img-src" })
  imgSrc?: string;

  @property({ attribute: "artifact-name" })
  artifactName?: string;

  @property({ attribute: "artifact-description" })
  artifactDescription?: string;

  override render() {
    return html`
      <article class="artifact-library-grid-item">
        <article class="artifact-library-grid-item-img">
          <slot name="img-src"
            ><img src="${this.imgSrc}" alt="${this.artifactName}"
          /></slot>
        </article>

        <article class="artifact-library-grid-item-text">
          <p><slot name="artifact-name">${this.artifactName}</slot></p>
          <p id="artifact-description">
            <slot name="artifact-description">${this.artifactDescription}</slot>
          </p>
        </article>
      </article>
    `;
  }

  static styles = [
    // reset.styles,
    css`
      .artifact-library-grid-item {
        display: flex;
        padding: var(--padding-insider);
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: auto;
        background-color: var(--color-main-background);
        border-radius: var(--border-radius-content);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        box-sizing: border-box;
        transition: transform 0.3s ease;
      }

      .artifact-library-grid-item:hover {
        transform: scale(1.03);
      }

      .artifact-library-grid-item-text {
        width: 200px;
      }

      #artifact-description {
        color: var(--color-main-support);
        font-family: var(--sub-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--p-font-size-smaller);
      }

      .artifact-library-grid-item-img img {
        width: 200px;
        height: 191px;
        object-fit: cover;
      }

      .artifact-library-grid-item-text p {
        color: var(--color-main-support);
        font-family: var(--sub-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h3-font-size);
      }
    `,
  ];
}
