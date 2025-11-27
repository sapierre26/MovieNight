import { html, LitElement } from "lit";
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

  renderSignInButton() {
    return html` <a href="login.html"><button class="login-out">LOGIN</button></a> `;
  }

  renderSignOutButton() {
    return html`
      <button class="login-out"
        @click=${(e: UIEvent) => {
          Events.relay(e, "auth:message", ["auth/signout"]);
        }}
      >
        Logout
      </button>
    `;
  }

  render() {
    return html`
      <a id="intro" slot="actuator">Hello, ${this.userid || "Moviegoer"} !</a>

      ${this.loggedIn ? this.renderSignOutButton() : this.renderSignInButton()}
    `;
  }

  static styles = [
    headings.styles
  ];
}