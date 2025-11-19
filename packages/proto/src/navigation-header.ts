import { html, css, LitElement } from "lit";
import reset from "./styles/reset.css.ts";

export class HeaderNavigationElement extends LitElement {
  override render() {
    return html`
      <div class="main-nav-bar">
        <div class="nav">
          <img
            id="logo"
            src="images/movie-night-logo-white.png"
            alt="Movie Night Logo"
          />

          <a href="index.html">HOME</a>
          <a href="movies-out-now.html">MOVIES OUT NOW</a>
          <a href="movie-library.html">MOVIE LIBRARY</a>
          <a href="theaters.html">THEATERS</a>
          <a href="soundtrack-library.html">MUSIC LIBRARY</a>
          <a href="artifacts.html">ARTIFACTS LIBRARY</a>
          <a href="film-locations.html">FAMOUS FILM LOCATIONS</a>
        </div>

        <!-- <a href="login.html">LOGIN</a> -->
        <div id="login">
          <movie-header></movie-header>
        </div>
      </div>

      <div class="sub-nav-container">
        <div class="theme-switch">
          <label class="toggle-switch" for="checkbox">
            <input type="checkbox" autocomplete="off" id="checkbox" />
            <div class="round toggle-switch-slider"></div>
          </label>
          <span id="toggle-switch-label">LIGHT MODE</span>
        </div>

        <div class="search-bar">
          <form>
            <input type="text" placeholder="Search..." name="search" />
            <button type="submit"><i class="fa fa-search"></i></button>
          </form>
        </div>
      </div>
    `;
  }

  static styles = [
    reset.styles,
    css`
      .main-nav-bar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .nav {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        padding: 0 20px;
        height: 70px;

        overflow: hidden;
        background-color: var(--color-main-background);
      }

      #logo {
        /* margin-left: 20px; */
        width: auto;
        height: 70px;
      }

      #login {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 1rem;
        padding: 0 20px;
        height: 70px;

        overflow: hidden;
        background-color: var(--color-main-background);
      }

      .main-nav-bar a {
        display: flex;
        align-items: center;
        padding: 0 10px;
        line-height: 70px;
        color: var(--color-main-support);
        text-align: center;
        text-decoration: none;
        font-size: var(--p-font-size);
        height: 100%;
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
      }

      .main-nav-bar a:hover {
        /* background-color: var(--color-sub-background); */
        /* color: var(--color-sub-background); */
        text-decoration: underline;
      }

      .sub-nav-container {
        display: flex;
        /* align-items: center; */
        justify-content: space-between;
        /* gap: 10px; */
        margin: 20px;
      }

      .sub-nav-container .theme-switch {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }

      .sub-nav-container .search-bar {
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }

      .sub-nav-container input[type="text"] {
        padding: 8px 10px;
        font-size: var(--p-font-size);
        border: 1px solid var(--color-sub-support);
        border-radius: 4px;
      }

      .sub-nav-container .search-bar button {
        padding: 8px 10px;
        background-color: var(--color-sub-background);
        font-size: 17px;
        border: 1px solid var(--color-sub-support);
        border-radius: 4px;
        cursor: pointer;
      }

      .sub-nav-container .search-bar button:hover {
        background-color: var(--color-main-support);
        color: var(--color-sub-background);
        border-radius: 4px;
      }

      .toggle-switch {
        display: inline-block;
        width: 60px;
        height: 34px;
        position: relative;
      }

      .toggle-switch input {
        display: none;
      }

      .toggle-switch-slider {
        background-color: #ccc;
        bottom: 0;
        cursor: pointer;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transition: 0.4s;
        border: 1px solid var(--color-sub-support);
      }

      .toggle-switch-slider::before {
        background-color: var(--color-main-support);
        bottom: 4px;
        content: "";
        height: 26px;
        left: 4px;
        position: absolute;
        transition: 0.4s;
        width: 26px;
      }

      input:checked + .toggle-switch-slider::before {
        transform: translateX(26px);
      }

      .toggle-switch-slider.round {
        border-radius: 34px;
      }

      .toggle-switch-slider.round::before {
        border-radius: 50%;
      }

      #toggle-switch-label {
        margin-left: 16px;
        color: var(--color-main-support);
        font-size: var(--p-font-size);
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--h3-font-type);
        user-select: none;
      }
    `,
  ];
}
