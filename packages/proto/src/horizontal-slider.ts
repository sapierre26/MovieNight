import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import "./horizontal-slider-item.js";

interface HorizontalSliderItemData {
  imgSrc?: string;
  movieName: string;
  href: string;
}

export class HorizontalSliderElement extends LitElement {
  @property()
  src?: string;

  @property()
  sectionHeading: string = "";

  @property()
  seeAll: string = "";

  @property()
  seeAllLink: string = "";

  @state()
  horizontalSliderItems: Array<HorizontalSliderItemData> = [];

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
          const horizontalSlider = json as {
            horizontalSliderItems: Array<HorizontalSliderItemData>;
          };

          this.horizontalSliderItems = horizontalSlider.horizontalSliderItems;
        }
      });
  }

  renderHorizontalSliderItem(gridItem: HorizontalSliderItemData) {
    return html`
      <horizontal-slider-item
        img-src="${gridItem.imgSrc}"
        movie-name="${gridItem.movieName}"
        href="${gridItem.href}"
      >
      </horizontal-slider-item>
    `;
  }

  render() {
    return html`
      <div class="horizontal-slider-section">
        <h2>${this.sectionHeading}</h2>
        <a href="${this.seeAllLink}"><h3>${this.seeAll}</h3></a>

        <div class="horizontal-slider-gallery-wrap">
          <button class="arrow left-arrow">&#10094;</button>

          <div class="horizontal-slider-gallery">
            <div>
              ${this.horizontalSliderItems.map((item) =>
                this.renderHorizontalSliderItem(item)
              )}
            </div>
          </div>

          <button class="arrow right-arrow">&#10095;</button>
        </div>
      </div>
    `;
  }

  static styles = css`
    .horizontal-slider-section h2 {
      margin-bottom: 5px;
      color: var(--color-main-support);
      font-family: var(--main-font-family);
      font-weight: var(--main-font-weight);
      font-style: var(--main-font-type);
      font-size: var(--h2-font-size);
    }

    .horizontal-slider-section h3 {
      margin-top: 5px;
      color: var(--color-main-support);
      font-family: var(--main-font-family);
      font-weight: var(--main-font-weight);
      font-style: var(--main-font-type);
      font-size: var(--h3-font-size);
    }

    .horizontal-slider-gallery-wrap {
      display: flex;
      align-items: center;
      justify-content: start;
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .horizontal-slider-gallery-wrap button {
      border-radius: 30px;
    }

    .horizontal-slider-gallery {
      display: flex;
      flex-wrap: nowrap;
      width: var(--width-horizontal-slider-container);
      overflow-x: auto;
      scroll-behavior: smooth;
    }

    .horizontal-slider-gallery div {
      display: flex;
      gap: 1rem;
    }

    .horizontal-slider-gallery::-webkit-scrollbar {
      display: none;
    }

    .arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      background-color: var(--color-sub-background);
      color: var(--color-sub-support);
      font-size: var(--h3-font-size);
      border: none;
      cursor: pointer;
    }

    .arrow:hover {
      background-color: var(--color-main-support);
      color: var(--color-sub-background);
    }

    .left-arrow {
      display: none;
      position: absolute;
      left: 0px;
    }

    .right-arrow {
      position: absolute;
      right: 0px;
    }
  `;
}