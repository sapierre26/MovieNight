import { History, View } from "@calpoly/mustang";
import { html, css } from "lit";
import { property, state } from "lit/decorators.js";
import { Credential } from "../../../server/src/models/credential";
import { Msg } from "../messages";
import { Model } from "../model";
// import reset from "./styles/reset.css.ts";

export class MovieGoerViewElement extends View<Model, Msg> {
  @property()
  userid!: string;

  @property()
  mode: "view" | "edit" | "confirm-delete" = "view";

  get profile(): Credential | undefined {
    return this.model?.profile;
  }

  @state()
  editProfile: Partial<Credential> = {};

  @state()
  _error?: Error;

  constructor() {
    super("Blazing:model");
  }

  connectedCallback() {
    super.connectedCallback?.();
    if (this.userid) {
      this.dispatchMessage(["profile/request", { userid: this.userid }]);
    }
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (name === "userid" && newValue !== oldValue) {
      this.dispatchMessage(["profile/request", { userid: newValue }]);
    }

    if (name === "mode" && newValue === "edit") {
      if (this.profile) {
        this.editProfile = { ... (this.profile ?? {}) };
      } 
    }
  }
  
  handleSubmit(event: Event) {
    event.preventDefault();

    const { userid, hashedPassword, name, hometown, bio } = this.editProfile;
    const profileToSave: Partial<Credential> = { 
      userid: userid || this.userid,
      name: name || "", 
      hometown: hometown || "", 
      bio: bio || "" 
    };
    const newPassword = hashedPassword?.trim() ? hashedPassword : undefined;

    // const viewPath = `/movie-night/user-profile/${this.userid}`;

    this.dispatchMessage([
      "profile/save",
      {
        userid: this.userid,
        profile: profileToSave,
        newPassword
      },
      {
        onSuccess: () =>
          History.dispatch(this, "history/navigate", {
            href: `/movie-night/user-profile/${this.userid}`,
          }),
        onFailure: (error: Error) => (this._error = error),
      },
    ]);
  }

  renderView() {
    return html`
      <div class="profile">
        <section class="profile-background">
          <div class="user-info">
            <div class="profile-img">
              <img src="/images/user-placeholder.png" alt="Moviegoer" />
            </div>

            <div class="profile-text">
              <h2>Username: ${this.profile?.userid}</h2>
              <h3>Password: ${this.profile?.hashedPassword}</h3>

              <br>

              <h2>Name: ${this.profile?.name}</h2>
              <h3>Hometown: ${this.profile?.hometown}</h3>
              <h3>Bio: ${this.profile?.bio}</h3>
            </div>
          </div>

          <div class="favorite-movies-gallery">
            <h2>My Favorite Movies:</h2>
          </div>

          <div class="edit">
            <button class="edit-profile-button"
              @click=${() =>
                History.dispatch(this, "history/navigate", { href: `/movie-night/user-profile/${this.userid}/edit` })}>
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
        <form @submit=${this.handleSubmit}>
          <div class="edit-form-group">
            <label>
              <span>Username: </span>
              <input type="text" name="username" .value=${this.editProfile.userid ?? ""}
                      @input=${(inpt: any) =>
                      (this.editProfile = {
                        ...this.editProfile,
                        userid: inpt.target.value
                      })
                      } />
            </label>

            <label>
              <span>Password: </span>
              <input type="password" name="password" .value=${this.editProfile.hashedPassword ?? ""}
                      @input=${(inpt: any) =>
                      (this.editProfile = {
                        ...this.editProfile,
                        hashedPassword: inpt.target.value
                      })
                      } />
            </label>

            <label>
              <span>Name: </span>
              <input type="text" name="name" .value=${this.editProfile.name ?? ""} 
                      @input=${(inpt: any) => 
                        (this.editProfile = {
                          ...this.editProfile,
                          name: inpt.target.value
                        })
                      } />
            </label>

            <label>
              <span>Hometown: </span>
              <input type="text" name="hometown" .value=${this.editProfile.hometown ?? ""} 
                      @input=${(inpt: any) => 
                        (this.editProfile = {
                          ...this.editProfile,
                          hometown: inpt.target.value
                        })
                      } />
            </label>

            <label>
              <span>Bio: </span>
              <textarea name="bio"
                      @input=${(inpt: any) => 
                        (this.editProfile = {
                          ...this.editProfile,
                          bio: inpt.target.value
                        })
                      }>${this.editProfile.bio ?? ""}</textarea>   
            </label>
          </div>

          <button type="submit">Save Profile Changes</button>
          <button type="button" 
            @click=${() => History.dispatch(this, "history/navigate", 
              { href: `/movie-night/user-profile/${this.userid}`})}>Cancel</button>
        </form>

        ${this._error ? html` <p class="error">${this._error}</p>` : ""}
      </main>
    `;
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
        width: 400px;
        height: 400px;
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