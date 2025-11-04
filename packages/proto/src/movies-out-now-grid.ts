import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import "./movies-out-now-grid-item.js";

interface MoviesOutNowGridItemData {
  imgSrc?: string;
  outNowName: string;
  squares: number;
  seeMovieTimesButton: string;
  watchTrailerNowButton: string;
}

export class MoviesOutNowGridElement extends LitElement {
  @property()
  src?: string;

  @state()
  moviesOutNowGridItems: Array<MoviesOutNowGridItemData> = [];

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
          const moviesOutNowLibraryGrid = json as {
            moviesOutNowGridItems: Array<MoviesOutNowGridItemData>;
          };

          this.moviesOutNowGridItems = moviesOutNowLibraryGrid.moviesOutNowGridItems;
        }
      });
  }

  renderMoviesOutNowGridItem(gridItem: MoviesOutNowGridItemData) {
    return html`
      <movies-out-now-grid-item
        img-src="${gridItem.imgSrc}"
        out-now-name="${gridItem.outNowName}"
        squares="${gridItem.squares}"
        seeMovieTimesButton="${gridItem.seeMovieTimesButton}"
        watchTrailerNowButton="${gridItem.watchTrailerNowButton}"
      >
      </movies-out-now-grid-item>
    `;
  }

  render() {
    return html`
      <div class="out-now-grid">
        ${this.moviesOutNowGridItems.map((item) =>
          this.renderMoviesOutNowGridItem(item)
        )}
      </div>
    `;
  }

  static styles = css`
    .out-now-grid,
        .movie-library-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, 250px);
        gap: 2rem;
        padding: var(--padding-body);
        justify-content: center;
    }
  `;
}
