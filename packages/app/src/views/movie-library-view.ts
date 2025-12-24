import { html, css, LitElement } from "lit";
import type { MovieLibraryGridElement } from "../components/movie-library-grid";
// import reset from "/styles/reset.css.ts";

export class MovieLibraryViewElement extends LitElement {
  filterByGenre(genre: string | null) {
    const movieGrid = this.renderRoot.querySelector(
      "#movie-library-grid") as MovieLibraryGridElement;

    movieGrid?.filterByGenre(genre);
  }

  render() {
    return html`
        <div class="sub-nav-bar">
            <div class="sub-nav-bar-content">
                <p>FILTER BY GENRE</p>

                <div class="sub-nav-bar-links">
                    <a @click=${() => this.filterByGenre(null)}>ALL MOVIES</a>
                    <a @click=${() => this.filterByGenre("3D")}>3D</a>
                    <a @click=${() => this.filterByGenre("Action")}>Action</a>
                    <a @click=${() => this.filterByGenre("Adventure")}>Adventure</a>
                    <a @click=${() => this.filterByGenre("Animated")}>Animated</a>
                    <a @click=${() => this.filterByGenre("Classic")}>Classic</a>
                    <a @click=${() => this.filterByGenre("Comedy")}>Comedy</a>
                    <a @click=${() => this.filterByGenre("Crime")}>Crime</a>
                    <a @click=${() => this.filterByGenre("Dance")}>Dance</a>
                    <a @click=${() => this.filterByGenre("Documentaries")}>Documentaries</a>
                    <a @click=${() => this.filterByGenre("Drama")}>Drama</a>
                    <a @click=${() => this.filterByGenre("Family")}>Family</a>
                    <a @click=${() => this.filterByGenre("Fantasy")}>Fantasy</a>
                    <a @click=${() => this.filterByGenre("Film, TV, Radio")}>Film, TV, Radio</a>
                    <a @click=${() => this.filterByGenre("Foreign")}>Foreign</a>
                    <a @click=${() => this.filterByGenre("Historical Film")}>Historical Film</a>
                    <a @click=${() => this.filterByGenre("Horror")}>Horror</a>
                    <a @click=${() => this.filterByGenre("IMAX")}>IMAX</a>
                    <a @click=${() => this.filterByGenre("Indie")}>Indie</a>
                    <a @click=${() => this.filterByGenre("Performance Arts")}>Peformance Arts</a>
                    <a @click=${() => this.filterByGenre("Romance")}>Romance</a>
                    <a @click=${() => this.filterByGenre("Sci-Fi")}>Sci-Fi</a>
                    <a @click=${() => this.filterByGenre("Special Events")}>Special Events</a>
                    <a @click=${() => this.filterByGenre("Sport")}>Sport</a>
                    <a @click=${() => this.filterByGenre("Spy Films")}>Spy Film</a>
                    <a @click=${() => this.filterByGenre("Suspense")}>Suspense</a>
                    <a @click=${() => this.filterByGenre("Thriller")}>Thriller</a>
                    <a @click=${() => this.filterByGenre("War")}>War</a>
                    <a @click=${() => this.filterByGenre("Western")}>Western</a> 
                </div>
            </div>
        </div>

        <movie-library-grid id="movie-library-grid" src="/api/movie-library"></movie-library-grid>
    `;
  }

  static styles = [
    css`
      .sub-nav-bar {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--padding-body);
        background-color: var(--color-main-background);
      }

      .sub-nav-bar-content {
        width: 100%;
      }

      .sub-nav-bar p {
        text-align: left;
        color: var(--color-main-support);
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h3-font-size);
      }

      .sub-nav-bar-links {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
        gap: 1.25rem;
        width: 100%;
        justify-items: center;
      }

      .sub-nav-bar-links a {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        background-color: var(--color-sub-background);
        color: var(--color-button-text);
        text-align: center;
        text-decoration: none;
        width: 145px;
        height: 45px;
        font-size: 17px;
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        border: var(--border-thickness-content) solid var(--color-sub-background);
        border-radius: var(--border-radius-content);
        cursor: pointer;
      }

      .sub-nav-bar-links a:hover {
        background-color: var(--color-button-text);
        color: var(--color-sub-background);
      }
    `,
  ];
}
