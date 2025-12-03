import { html, css, LitElement } from "lit";
import { state } from "lit/decorators.js";
import { Auth, Observer, Events } from "@calpoly/mustang";
import headings from "./styles/headings.css.js";

export class HeaderElement extends LitElement {
  _authObserver = new Observer<Auth.Model>(this, "Blazing:auth");
  _user?: Auth.User;

  @state()
  loggedIn = false;

  @state()
  userid?: string;

  connectedCallback() {
    super.connectedCallback();

    this._authObserver.observe((auth: Auth.Model) => {
      this._user = auth.user;
      const { user } = auth;

      if (user && user.authenticated) {
        this.loggedIn = true;
        this.userid = user.username;
      } else {
        this.loggedIn = false;
        this.userid = undefined;
      }
    });
  }

  get authorization(): HeadersInit {
    if (this._user?.authenticated) {
      return {
        Authorization: `Bearer ${(this._user as Auth.AuthenticatedUser).token}`,
      };
    }

    return {};
  }

  hydrate(url: string) {
    fetch(url, { headers: this.authorization }).then((res) => res.json());
  }

  renderSignInButton() { // when signed in can press on the profile icon to go to profile page
    return html` <a href="login.html"><button class="login-out">LOGIN</button></a> `;
  }

  renderSignOutButton() { // when not signed in/signed out can't press on profile icon
    return html`
      <button class="login-out"
        @click=${(e: UIEvent) => {
          Events.relay(e, "auth:message", ["auth/signout"]);
        }}
      >
        LOGOUT
      </button>
    `;
  }

  render() {
    const profile = this.loggedIn && this.userid ? `/movie-night/user-profile/${this.userid}` : `login.html`;

    return html`
      <a id="intro" slot="actuator">Hello, ${this.userid || "Moviegoer"} !</a>

      ${this.loggedIn ? this.renderSignOutButton() : this.renderSignInButton()}

      <a href="${profile}">
        <img id="profile-icon" src="/images/profile-icon-black.png" alt="Profile Icon" />
      </a>      
    `;
  }

  static styles = [
    headings.styles,
    css `
      :host {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    `
  ];
}