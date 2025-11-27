import { html, css, LitElement } from "lit";
// import reset from "./styles/reset.css.ts";

export class HomeViewElement extends LitElement {
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

  render() {
    return html`
      <div class="home-page">
        <!--THEATERS NEAR YOU-->
        <section class="theaters-near-you">
          <h2>THEATERS NEAR YOU</h2>
          <a href="/movie-night/theaters"><h3>SEE MORE THEATERS</h3></a>

          <theaters-near-you-list src="/functions/theaters-near-you-data.json"></theaters-near-you-list>
        </section>

        <!--ALL MOVIES CURRENTLY PLAYING SLIDER-->
        <section class="movies-out-now">
          <h2>MOVIES OUT NOW</h2>
          <a href="/movie-night/movies-out-now"><h3>SEE ALL MOVIES OUT NOW</h3></a>

          <div class="horizontal-slider-gallery-wrap">
            <button class="arrow left-arrow">&#10094;</button>

            <div class="horizontal-slider-gallery">
              <div>
                <span
                  ><a href="movies-out-now-item.html"
                    ><img
                      src="movie-flyer-images-vertical/him.jpg"
                      alt="Him" /></a
                ></span>
                <span
                  ><a href="movies-out-now-item.html"
                    ><img
                      src="movie-flyer-images-vertical/him.jpg"
                      alt="Him" /></a
                ></span>
                <span
                  ><a href="movies-out-now-item.html"
                    ><img
                      src="movie-flyer-images-vertical/him.jpg"
                      alt="Him" /></a
                ></span>
                <span
                  ><a href="movies-out-now-item.html"
                    ><img
                      src="movie-flyer-images-vertical/him.jpg"
                      alt="Him" /></a
                ></span>
                <span
                  ><a href="movies-out-now-item.html"
                    ><img
                      src="movie-flyer-images-vertical/him.jpg"
                      alt="Him" /></a
                ></span>
                <span
                  ><a href="movies-out-now-item.html"
                    ><img
                      src="movie-flyer-images-vertical/him.jpg"
                      alt="Him" /></a
                ></span>
                <span
                  ><a href="movies-out-now-item.html"
                    ><img
                      src="movie-flyer-images-vertical/him.jpg"
                      alt="Him" /></a
                ></span>
                <span
                  ><a href="movies-out-now-item.html"
                    ><img
                      src="movie-flyer-images-vertical/him.jpg"
                      alt="Him" /></a
                ></span>
                <span
                  ><a href="movies-out-now-item.html"
                    ><img
                      src="movie-flyer-images-vertical/him.jpg"
                      alt="Him" /></a
                ></span>
              </div>
            </div>

            <button class="arrow right-arrow">&#10095;</button>
          </div>
        </section>

        <!--COMING SOON TO THEATERS SLIDER-->
        <section class="coming-soon">
          <h2>COMING SOON</h2>

          <div class="horizontal-slider-gallery-wrap">
            <button class="arrow left-arrow">&#10094;</button>

            <div class="horizontal-slider-gallery">
              <div>
                <span
                  ><a href="movies-out-now-item.html"
                    ><img
                      src="movie-flyer-images-vertical/him.jpg"
                      alt="Him" /></a
                ></span>
                <span
                  ><a href="movies-out-now-item.html"
                    ><img
                      src="movie-flyer-images-vertical/him.jpg"
                      alt="Him" /></a
                ></span>
                <span
                  ><a href="movies-out-now-item.html"
                    ><img
                      src="movie-flyer-images-vertical/him.jpg"
                      alt="Him" /></a
                ></span>
                <span
                  ><a href="movies-out-now-item.html"
                    ><img
                      src="movie-flyer-images-vertical/him.jpg"
                      alt="Him" /></a
                ></span>
                <span
                  ><a href="movies-out-now-item.html"
                    ><img
                      src="movie-flyer-images-vertical/him.jpg"
                      alt="Him" /></a
                ></span>
                <span
                  ><a href="movies-out-now-item.html"
                    ><img
                      src="movie-flyer-images-vertical/him.jpg"
                      alt="Him" /></a
                ></span>
                <span
                  ><a href="movies-out-now-item.html"
                    ><img
                      src="movie-flyer-images-vertical/him.jpg"
                      alt="Him" /></a
                ></span>
                <span
                  ><a href="movies-out-now-item.html"
                    ><img
                      src="movie-flyer-images-vertical/him.jpg"
                      alt="Him" /></a
                ></span>
                <span
                  ><a href="movies-out-now-item.html"
                    ><img
                      src="movie-flyer-images-vertical/him.jpg"
                      alt="Him" /></a
                ></span>
              </div>
            </div>

            <button class="arrow right-arrow">&#10095;</button>
          </div>
        </section>

        <!--GREATEST SOUNDTRACKS OF ALL TIME-->
        <section class="goat">
          <h2>GREATEST SOUNDTRACKS OF ALL TIME</h2>
          <a href="/movie-night/music-library"><h3>SEE ALL SOUNDTRACKS</h3></a>

          <div class="horizontal-slider-gallery-wrap">
            <button class="arrow left-arrow">&#10094;</button>

            <div class="horizontal-slider-gallery">
              <div>
                <span
                  ><a href="movies-out-now-item.html"
                    ><img
                      src="movie-flyer-images-vertical/him.jpg"
                      alt="Him" /></a
                ></span>
                <span
                  ><a href="movies-out-now-item.html"
                    ><img
                      src="movie-flyer-images-vertical/him.jpg"
                      alt="Him" /></a
                ></span>
                <span
                  ><a href="movies-out-now-item.html"
                    ><img
                      src="movie-flyer-images-vertical/him.jpg"
                      alt="Him" /></a
                ></span>
                <span
                  ><a href="movies-out-now-item.html"
                    ><img
                      src="movie-flyer-images-vertical/him.jpg"
                      alt="Him" /></a
                ></span>
                <span
                  ><a href="movies-out-now-item.html"
                    ><img
                      src="movie-flyer-images-vertical/him.jpg"
                      alt="Him" /></a
                ></span>
                <span
                  ><a href="movies-out-now-item.html"
                    ><img
                      src="movie-flyer-images-vertical/him.jpg"
                      alt="Him" /></a
                ></span>
                <span
                  ><a href="movies-out-now-item.html"
                    ><img
                      src="movie-flyer-images-vertical/him.jpg"
                      alt="Him" /></a
                ></span>
                <span
                  ><a href="movies-out-now-item.html"
                    ><img
                      src="movie-flyer-images-vertical/him.jpg"
                      alt="Him" /></a
                ></span>
                <span
                  ><a href="movies-out-now-item.html"
                    ><img
                      src="movie-flyer-images-vertical/him.jpg"
                      alt="Him" /></a
                ></span>
              </div>
            </div>

            <button class="arrow right-arrow">&#10095;</button>
          </div>
        </section>
      </div>
    `;
  }

  static styles = [
    css `
      .home-page {
        margin: var(--margin-for-body);
        padding: var(--padding-insider);
      }

      .theaters-near-you h2,
      .movies-out-now h2,
      .coming-soon h2,
      .goat h2 {
        margin-bottom: 5px;
        color: var(--color-main-support);
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h2-font-size);
      }

      .theaters-near-you h3,
      .movies-out-now h3,
      .goat h3 {
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
        color: var(--color-main-support);
        font-size: var(--h3-font-size);
        border: none;
        cursor: pointer;
        transform: translateY(-50%);
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
    `,
  ];
}
