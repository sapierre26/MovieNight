import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import reset from "./styles/reset.css.ts";

export class HorizontalSliderElement extends LitElement {
  @property()
  sectionTitle?: string;

  @property()
  seeMoreHref?: string;

  @property()
  seeMoreText?: string;

  @property()
  src?: string;

  @state()
  images: Array<{ imgSrc: string; movieName: string }> = [];

  @property({ attribute: "img-src" })
  imgSrc?: string;

  @property()
  movieName?: string;

  connectedCallback() {
    super.connectedCallback();
    if (this.src) this.hydrate(this.src);
  }

  hydrate(src: string) {
    fetch(src)
      .then((res) => res.json())
      .then((json: unknown) => {
        if (json) {
          // store the data as @state
          this.images = json as Array<{ imgSrc: string; movieName: string }>;
        }
      })
  }

  firstUpdated() {
    this.updateHorizontalSlider();
  }

  updateHorizontalSlider() {
    const scrollContainerWrapper = this.renderRoot.querySelectorAll(".horizontal-slider-gallery-wrap");

    scrollContainerWrapper.forEach((image) => {
      const scrollContainer = image.querySelector(".horizontal-slider-gallery");
      const backButton = image.querySelector(".left-arrow") as HTMLElement;
      const forwardButton = image.querySelector(".right-arrow") as HTMLElement;

      if (!scrollContainer || !backButton || !forwardButton) {
        return;
      }

      forwardButton?.addEventListener("click", () => {
        (scrollContainer as HTMLElement).scrollBy({ left: scrollContainer.clientWidth, behavior: "smooth" });
      });

      backButton?.addEventListener("click", () => {
        (scrollContainer as HTMLElement).scrollBy({ left: -scrollContainer.clientWidth, behavior: "smooth" });
      });

      scrollContainer.addEventListener("scroll", () => {
        const limitBackButton =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;

        backButton.style.display =
          scrollContainer.scrollLeft > 0 ? "flex" : "none"; // show left arrow after a scroll right happens
        forwardButton.style.display =
          scrollContainer.scrollLeft >= limitBackButton - 5 ? "none" : "flex"; // hide right arrow when done scrolling
      });
    });
  }

  override render() {
    return html`
      <section class="horizontal-slider-section">
        <h2>${this.sectionTitle}</h2>
        <a href="${this.seeMoreHref}"><h3>${this.seeMoreText}</h3></a>

        <div class="horizontal-slider-gallery-wrap">
          <button class="arrow left-arrow">&#10094;</button>

          <div class="horizontal-slider-gallery">
            <div>
              ${this.images.map(
                (movie) => html`
                  <span>
                    <a href="movies-out-now-item.html"
                      ><slot name="img-src"
                        ><img
                          src="${movie.imgSrc}"
                          alt="${movie.movieName}" /></slot
                    ></a>
                  </span>
                `,
              )}
            </div>
          </div>

          <button class="arrow right-arrow">&#10095;</button>
        </div>
      </section>
    `;
  }

  static styles = [
    reset.styles,
    css`
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

      .horizontal-slider-gallery div span {
        flex: 0 0 auto;
      }

      .horizontal-slider-gallery div img {
        width: var(--width-slider-imgs);
        height: var(--height-slider-imgs);
        object-fit: cover;
      }

      .horizontal-slider-gallery::-webkit-scrollbar {
        display: none;
      }

      .arrow {
        display: flex;
        align-items: center;
        justify-content: center;
        top: 50%;
        position: absolute;
        width: 50px;
        height: 50px;
        background-color: var(--color-sub-background);
        color: var(--color-button-text);
        font-size: var(--h3-font-size);
        border: none;
        cursor: pointer;
        transform: translateY(-50%);
      }

      .arrow:hover {
        background-color: var(--color-button-text);
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
    `,
  ];
}
