import { html, css, LitElement } from "lit";;
// import reset from "/styles/reset.css.ts";

export class FilmLocationsViewElement extends LitElement {
  render() {
    return html`
        <div id="film-map"></div>
    `;
  }

  static styles = [
    css`
      #film-map {
        display: block;
        margin: var(--margin-for-body) auto;
        position: relative;
        width: calc(100% - (var(--margin-for-body) * 2));
        height: 600px;
        overflow: hidden;
        box-sizing: border-box;
        border-radius: var(--border-radius-content);
      }

      .leaflet-popup-content-wrapper {
        background-color: var(--color-main-background);
        font-family: var(--main-font-family);
        font-size: var(--p-font-size-smaller);
      }

      .leaflet-popup-content {
        color: var(--color-main-support);
        margin: 10px 15px;
        line-height: 1.5;
      }

      .leaflet-popup-tip {
        background-color: var(--color-main-background);
      }

      /* .leaflet-marker-icon {
        background-color: var(--color-sub-background);
        color: var(--color-button-text);
        border: var(--border-thickness-content) solid var(--color-sub-background);
        border-radius: var(--border-radius-content);
        transition: transform 0.2s ease;
      } */

      .icon-marker svg path {
        fill: var(--color-main-background);
        transition: transform 0.2s ease;
      }

      .icon-marker:hover svg path {
        transform: scale(1.03);
      }`,
  ];
}
