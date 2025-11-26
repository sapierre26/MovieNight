import { define, Form } from "@calpoly/mustang";
import { html, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import { MovieGoer } from "/server/models/movie-goer";
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
  moviegoer?: MovieGoer;

  get src() {
    return `/api/movie-goers/${this.userid}`;
  }

  render() {
    return html`
      <div class="profile">
        <section class="profile-background">
          <div class="user-info">
            <div class="profile-img">
              <img src="images/him-for-slides.png" alt="Moviegoer" />
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
                ><img src="movie-flyer-images-vertical/him.jpg" alt="Him"
              /></span>
              <span
                ><img src="movie-flyer-images-vertical/him.jpg" alt="Him"
              /></span>
              <span
                ><img src="movie-flyer-images-vertical/him.jpg" alt="Him"
              /></span>
              <span
                ><img src="movie-flyer-images-vertical/him.jpg" alt="Him"
              /></span>
              <span
                ><img src="movie-flyer-images-vertical/him.jpg" alt="Him"
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
}
