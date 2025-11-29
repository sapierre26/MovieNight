import { View } from "@calpoly/mustang";
import { html, css } from "lit";
import { property, state } from "lit/decorators.js";
import { MovieGoer } from "../../../server/src/models/movie-goer";
import { Msg } from "../messages";
import { Model } from "../model";
// import reset from "./styles/reset.css.ts";

export class MovieGoerViewElement extends View<Model, Msg> {
  @property({ attribute: "user-id" })
  userid?: string;

  @state()
  get profile(): MovieGoer | undefined {
    return this.model.profile;
  }

  constructor() {
    super("Blazing:model");
  }

  attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (
      name === "user-id" &&
      oldValue !== newValue &&
      newValue
    ) {
      this.dispatchMessage([
        "profile/request",
        { userid: newValue }
      ]);
    }
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
              <h1>${this.profile?.name}</h1>
              <h2>${this.profile?.username}</h2>
              <h2>${this.profile?.hometown}</h2>
              <p>${this.profile?.bio}</p>
            </div>
          </div>

          <div class="favorite-movies-gallery">
            <h2>My Favorite Movies:</h2>
            <div>
              ${this.profile?.favoriteMovies.map(
                (movie) => html`<span
                  ><img src="/favorite-movies/${movie}.png" alt="${movie}" /></span>`
              )}
              // <span
              //   ><img 
              //     src="/favorite-movies/user-placeholder.png" 
              //     alt="Dreamgirls"
              // /></span>
              // <span
              //   ><img
              //     src="/favorite-movies/user-placeholder.png"
              //     alt="Avengers: Infinity War"
              // /></span>
              // <span
              //   ><img
              //     src="/favorite-movies/user-placeholder.png"
              //     alt="Star Wars: Revenge of the Sith"
              // /></span>
              // <span
              //   ><img
              //     src="/favorite-movies/user-placeholder.png"
              //     alt="The Lion King"
              // /></span>
              // <span
              //   ><img
              //     src="/favorite-movies/user-placeholder.png"
              //     alt="Captain America: The Winter Soldier"
              // /></span>
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


// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
//                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
//                 in reprehenderit in voluptate velit esse cillum dolore eu fugiat
//                 nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//                 sunt in culpa qui officia deserunt mollit anim id est laborum.