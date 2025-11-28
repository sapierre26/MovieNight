import { define, Form } from "@calpoly/mustang";
import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
// import reset from "./styles/reset.css.ts";

export class MovieGoerViewElement extends LitElement {
  static uses = define({
    "mu-form": Form.Element,
  });

  @property({ attribute: "user-id" })
  userid?: string;

  @property()
  mode = "view";

  @state()
  moviegoer?: any;

  get src() {
    return `/api/movie-goers/${this.userid}`;
  }

  render() {
    return html`
      <div class="profile">
        <section class="profile-background">
          <div class="user-info">
            <div class="profile-img">
              <img src="/images/user-placeholder.png" alt="Moviegoer" />
            </div>

            <div class="profile-text">
              <h1>Moviegoer Name</h1>
              <h2>username</h2>
              <h2>hometown</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div class="favorite-movies-gallery">
            <h2>My Favorite Movies:</h2>
            <div>
              <span
                ><img src="/favorite-movies/dreamgirls.jpg" alt="Dreamgirls"
              /></span>
              <span
                ><img src="/favorite-movies/infinity-war.jpg" alt="Avengers: Infinity War"
              /></span>
              <span
                ><img src="/favorite-movies/revenge-of-the-sith.jpg" alt="Star Wars: Revenge of the Sith"
              /></span>
              <span
                ><img src="/favorite-movies/the-lion-king.jpeg" alt="The Lion King"
              /></span>
              <span
                ><img src="/favorite-movies/the-winter-soldier.jpg" alt="Captain America: The Winter Soldier"
              /></span>
            </div>
          </div>

          <div class="edit">
            <button class="edit-profile-button">Edit Profile</button>
          </div>
        </section>
      </div>
    `;
  }

  static styles = [
    css`
      .profile-background {
        background-color: var(--color-main-background);
        margin: var(--margin-for-body);
        padding: var(--padding-insider);
        border-radius: var(--border-radius-content);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }

      .user-info {
        display: flex;
        flex-direction: row;
      }

      .profile-img img {
        width: 600px;
        height: 600px;
        object-fit: cover;
      }

      .profile-text {
        flex: 1;
        position: relative;
        padding: var(--padding-insider);
      }

      .profile-background h1 {
        color: var(--color-main-support);
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h1-font-size);
      }

      .profile-background h2 {
        color: var(--color-main-support);
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h2-font-size);
      }

      .profile-background h3 {
        color: var(--color-main-support);
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h3-font-size);
      }

      .profile-background p {
        color: var(--color-main-support);
        font-family: var(--main-alternative-font-family);
        font-weight: var(--main-alternative-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--p-font-size-bigger);
      }

      .favorite-movies-gallery {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        width: var(--width-horizontal-slider-container);
      }

      .favorite-movies-gallery div {
        display: flex;
        gap: 1rem;
      }

      .favorite-movies-gallery div span {
        flex: 0 0 auto;
      }

      .favorite-movies-gallery div img {
        width: var(--width-slider-imgs);
        height: var(--height-slider-imgs);
        object-fit: cover;
      }

      .edit {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .edit-profile-button {
        margin-top: 1rem;
        padding: 10px 20px;
        background-color: var(--color-sub-background);
        color: var(--color-button-text);
        text-align: center;
        text-decoration: none;
        width: 300px;
        height: auto;
        font-size: var(--h3-font-size);
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        border: 1px solid var(--color-sub-support);
        border-radius: var(--border-sub-radius-content);
        cursor: pointer;
        transition: transform 0.3s ease;
      }

      .edit-profile-button:hover {
        background-color: var(--color-button-text);
        color: var(--color-sub-background);
        transform: scale(1.03);
      }
    `,
  ];
}
