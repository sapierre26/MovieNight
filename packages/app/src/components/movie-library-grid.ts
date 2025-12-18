import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import "./movie-library-grid-item.js";

interface MovieLibraryGridItemData {
  imgSrc?: string;
  movieName: string;
  squares: number;
}

export class MovieLibraryGridElement extends LitElement {
  @property()
  src?: string;

  @state()
  movieLibraryGridItems: Array<MovieLibraryGridItemData> = [];

  connectedCallback() {
    super.connectedCallback();
    if (this.src) this.hydrate(this.src);
  }

  hydrate(src: string) {
    fetch(src)
      .then((res) => res.json())
      .then((movies: MovieLibraryGridItemData[]) => {
        this.movieLibraryGridItems = movies;
      })
      .catch(console.error);
  }

  renderMovieLibraryGridItem(gridItem: MovieLibraryGridItemData) {
    return html`
      <movie-library-grid-item
        img-src="${gridItem.imgSrc}"
        movie-name="${gridItem.movieName}"
        squares="${gridItem.squares}"
      >
      </movie-library-grid-item>
    `;
  }

  render() {
    return html`
      <div class="movie-library-grid">
        ${this.movieLibraryGridItems.map((item) =>
          this.renderMovieLibraryGridItem(item)
        )}
      </div>
    `;
  }

  static styles = css`
    .movie-library-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, 250px);
        gap: 2rem;
        padding: var(--padding-body);
        justify-content: center;
    }
  `;
}
