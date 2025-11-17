import { html, LitElement } from "lit";

export class HomeViewElement extends LitElement {
  render() {
    return html`
        <div class="home-page">
            <!--THEATERS NEAR YOU-->
            <section class="theaters-near-you">
            <h2>THEATERS NEAR YOU</h2>
            <a href="theaters.html"><h3>SEE MORE THEATERS</h3></a>

            <theaters-near-you-list src="/functions/theaters-near-you-data.json"></theaters-near-you-list>
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

  // more to come
}