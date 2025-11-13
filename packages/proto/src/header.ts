import { html, LitElement } from "lit";
import { state } from "lit/decorators.js";
import { Auth, Observer, Events } from "@calpoly/mustang";

export class HeaderElement extends LitElement {
  _authObserver = new Observer<Auth.Model>(this, "Blazing:auth");
  _user?: Auth.User;

  get authorization() {
    return (
      this._user?.authenticated && {
        Authorization:
          `Bearer ${(this._user as Auth.AuthenticatedUser).token}`
      }
    );
  }

  @state()
  loggedIn = false;

  @state()
  userid?: string;

  connectedCallback() {
    super.connectedCallback();

    this._authObserver.observe((auth: Auth.Model) => {
      this._user= auth.user;
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

  renderSignInButton() {
    return html`
      <a href="/login.html">
        Sign In…
      </a>
    `;
  }

  renderSignOutButton() {
  return html`
    <button
      @click=${(e: UIEvent) => {
        Events.relay(e, "auth:message", ["auth/signout"])
      }}
    >
      Sign Out
    </button>
  `;
}

  render() {
    return html`
      <a slot="actuator">Hello, ${this.userid || "movie goer"}</a>

      ${this.loggedIn ?
        this.renderSignOutButton() :
        this.renderSignInButton()
      }
    `
  }
}
