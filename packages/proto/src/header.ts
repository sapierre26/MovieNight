import { html, css, LitElement } from "lit";
import { state } from "lit/decorators.js";
import { Auth, Observer, Events } from "@calpoly/mustang";

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
    return html` <button class="login-out"><a href="login.html">LOGIN</a></button> `;
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
    css`
      .login-out {
        padding: 8px 10px;
        background-color: var(--color-sub-background);
        font-size: var(--p-font-size);
        border: 1px solid var(--color-sub-support);
        border-radius: var(--border-sub-radius-content);
      }

      .login-out a {
        padding: 0 16px;
        color: var(--color-main-support);
        text-align: center;
        text-decoration: none;
        font-size: var(--p-font-size);
        height: 100%;
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
      }

      .login-out a:hover {
        text-decoration: underline;
      }

      #intro {
        padding: 0 16px;
        color: var(--color-main-support);
        text-align: center;
        text-decoration: none;
        font-size: var(--p-font-size);
        height: 100%;
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
      }
    `,
  ];
}
