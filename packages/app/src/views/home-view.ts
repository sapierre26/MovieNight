import { html, css, LitElement } from "lit";
// import reset from "/styles/reset.css.ts";

export class HomeViewElement extends LitElement {
  src = "/api/home";

  render() {
    return html`
      <div class="home-page">
        <!--THEATERS NEAR YOU-->
        <section class="theaters-near-you">
          <h2>THEATERS NEAR YOU</h2>
          <a href="theaters.html"><h3>SEE MORE THEATERS</h3></a>

          <theaters-near-you-list
            src="/functions/theaters-near-you-data.json"
          ></theaters-near-you-list>
        </section>

        <!--ALL MOVIES CURRENTLY PLAYING SLIDER-->
        <section class="movies-out-now">
          <h2>MOVIES OUT NOW</h2>
          <a href="movies-out-now.html"><h3>SEE ALL MOVIES OUT NOW</h3></a>

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
          <a href="soundtrack-library.html"><h3>SEE ALL SOUNDTRACKS</h3></a>

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
    // reset.styles,
    css`
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
        width: 50px;
        height: 50px;
        background-color: var(--color-sub-background);
        color: var(--color-main-support);
        font-size: var(--h3-font-size);
        border: none;
        cursor: pointer;
        transition: transform 0.3s ease;
      }

      .arrow:hover {
        background-color: var(--color-main-support);
        color: var(--color-sub-background);
        transform: scale(1.03);
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
