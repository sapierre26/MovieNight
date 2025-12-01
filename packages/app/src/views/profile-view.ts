import { define, Form, History, View } from "@calpoly/mustang";
import { html, css } from "lit";
import { property, state } from "lit/decorators.js";
import { MovieGoer } from "../../../server/src/models/movie-goer";
import { Msg } from "../messages";
import { Model } from "../model";
// import reset from "./styles/reset.css.ts";

export class MovieGoerViewElement extends View<Model, Msg> {
  static uses = define({
    "mu-form": Form.Element, // make sure mu-form is defined
  });

  @property({ attribute: "user-id" })
  userid!: string;

  @property()
  mode = "view";

  get profile(): MovieGoer | undefined {
    return this.model.profile;
  }

  @state()
  _error?: Error;

  constructor() {
    super("Blazing:model");
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (name === "user-id" && oldValue !== newValue && newValue) {
      this.dispatchMessage(["profile/request", { userid: newValue }]);
    }
  }

  handleSubmit(event: Form.SubmitEvent<MovieGoer>) {
    const viewPath = `/movie-night/user-profile/${this.userid}`;

    this.dispatchMessage([
      "profile/save",
      {
        userid: this.userid,
        profile: event.detail,
      },
      {
        onSuccess: () =>
          History.dispatch(this, "history/navigate", {
            href: viewPath,
          }),
        onFailure: (error: Error) => (this._error = error),
      },
    ]);
  }

  renderView() {
    const editPath = `/movie-night/user-profile/${this.userid}/edit`;

    return html`
      <div class="profile">
        <section class="profile-background">
          <div class="user-info">
            <div class="profile-img">
              <img src="${this.profile?.profileImg}" alt="Moviegoer" />
            </div>

            <div class="profile-text">
              <h2>Name: ${this.profile?.name}</h2>
              <h3>Bio: ${this.profile?.bio}</h3>

              <h2>Username: ${this.profile?.username}</h2>
              <h2>Hometown: ${this.profile?.hometown}</h2>
            </div>
          </div>

          <div class="favorite-movies-gallery">
            <h2>My Favorite Movies:</h2>
            <div>
               ${this.profile?.favoriteMovies.map(
                (movie) => html`
                  <span>
                    <img src="/favorite-movies/${movie}.png" alt="${movie}" />
                  </span>`
              )}
            </div>
          </div>

          <div class="edit">
            <button class="edit-profile-button"
              @click=${() =>
                History.dispatch(this, "history/navigate", { href: editPath })}
            >
              Edit Profile
            </button>
          </div>
        </section>
      </div>
    `;
  }

  renderEditor() {
    return html`
      <main class="page">
        <mu-form .init=${this.profile} @mu-form:submit=${this.handleSubmit}
        
          <div class="edit-form-group">
            <label>
              <span>Profile Image: </span>
              <input type="file" name="profileImg" />
            </label>

            <label>
              <span>Name: </span>
              <input type="text" name="name" />
            </label>

            <label>
              <span>Username: </span>
              <input type="text" name="username" />
            </label>

            <label>
              <span>Hometown: </span>
              <input type="text" name="hometown" />
            </label>

            <label>
              <span>Bio: </span>
              <input type="text" name="bio" />
            </label>

            <label>
              <span>Favorite Movies: </span>
              <input type="file" name="favoriteMovies" />
            </label>

            <button type="submit" class="edit-profile-button">Save Profile</button>
          </div>
        </mu-form>
      </main>
    `;
  }

  renderError() {
    return this._error ? html` <p class="error">${this._error}</p>` : "";
  }

  render() {
    return this.mode === "view" ? this.renderView() : this.renderEditor();
  }

  static styles = [
    css`
      .profile-background, .page {
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
        border: 1px solid var(--color-sub-support);
        object-fit: cover;
      }

      .profile-text {
        flex: 1;
        position: relative;
        padding: var(--padding-insider);
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
        font-family: var(--main-alternative-font-family);
        font-weight: var(--main-alternative-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h3-font-size);
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

      .page {
        display: flex;
        flex-direction: column;
        align-items: center;
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

      .edit-form-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-top: 0.5rem;
      }

      .edit-form-group label {
        color: var(--color-main-support);
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h3-font-size);
      }

      .edit-form-group input {
        padding: 8px 10px;
        width: 100%;
        max-width: 300px;
        font-family: var(--main-font-family);
        font-size: var(--p-font-size-smaller);
        background-color: var(--color-main-support);
        color: var(--color-sub-support);
        border: 1px solid var(--color-sub-support);
        border-radius: var(--border-sub-radius-content);
        transition: all 0.2s;
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


// <div class="edit">
//   <button type="submit" class="edit-profile-button">Save Profile</button>
// </div>