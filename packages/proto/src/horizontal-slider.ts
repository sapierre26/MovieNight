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
      
    `;
  }

  static styles = css`
  `;
}