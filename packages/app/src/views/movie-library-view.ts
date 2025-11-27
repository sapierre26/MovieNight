import { html, css, LitElement } from "lit";;
// import reset from "/styles/reset.css.ts";

export class MovieLibraryViewElement extends LitElement {
  render() {
    return html`
        <div class="sub-nav-bar">
            <div class="sub-nav-bar-content">
                <p>FILTER BY GENRE</p>

                <div class="sub-nav-bar-links">
                    <a href="#3d">3D</a>
                    <a href="#action">Action</a>
                    <a href="#animated">Animated</a>
                    <a href="#classic">Classic</a>
                    <a href="#comedy">Comedy</a>
                    <a href="#dance">Dance</a>
                    <a href="#documentaries">Documentaries</a>
                    <a href="#drama">Drama</a>
                    <a href="#film-tv-radio">Film, Tv, Radio</a>
                    <a href="#foreign">Foreign</a>
                    <a href="#historical-film">Historical Film</a>
                    <a href="#horror">Horror</a>
                    <a href="#imax">IMAX</a>
                    <a href="#indie">Indie</a>
                    <a href="#kids">Kids</a>
                    <a href="#music-peforming-arts">Peformance Arts</a>
                    <a href="#romance">Romance</a>
                    <a href="#sci-fi">Sci-Fi</a>
                    <a href="#special-events">Special Events</a>
                    <a href="#spy-film">Spy Film</a>
                    <a href="#suspense">Suspense</a>
                    <a href="#war">War</a>
                    <a href="#western">Western</a>
                </div>
            </div>
        </div>

        <movie-library-grid src="/functions/movie-library-data.json"></movie-library-grid>
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
      }

      .sub-nav-bar-links a:hover {
        background-color: var(--color-button-text);
        color: var(--color-sub-background);
      }
    `,
  ];
}
