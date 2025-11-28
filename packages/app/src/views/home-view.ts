import { html, css, LitElement } from "lit";
// import reset from "./styles/reset.css.ts";

export class HomeViewElement extends LitElement {
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
        <section class="horizontal-slider-section">
          <horizontal-slider sectionTitle="MOVIES OUT NOW" seeMoreHref="/movie-night/movies-out-now" seeMoreText="SEE ALL MOVIES OUT NOW" src="/functions/slider-movies-out-now-data.json"></horizontal-slider>
        </section>

        <!--COMING SOON TO THEATERS SLIDER-->
        <section class="horizontal-slider-section">
          <horizontal-slider sectionTitle="COMING SOON" src="/functions/slider-coming-soon-data.json"></horizontal-slider>
        </section>

        <!--GREATEST SOUNDTRACKS OF ALL TIME-->
        <section class="horizontal-slider-section">
          <horizontal-slider sectionTitle="GREATEST SOUNDTRACKS OF ALL TIME" seeMoreHref="/movie-night/music-library" seeMoreText="SEE ALL GREATEST SOUNDTRACKS" src="/functions/slider-greatest-soundtracks-data.json"></horizontal-slider>
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

      .theaters-near-you h2 {
        margin-bottom: 5px;
        color: var(--color-main-support);
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h2-font-size);
      }

      .theaters-near-you h3 {
        margin-top: 5px;
        color: var(--color-main-support);
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h3-font-size);
      }
    `,
  ];
}
