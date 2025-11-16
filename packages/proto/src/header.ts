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
    // return (
    //   this._user?.authenticated && {
    //     Authorization:
    //       `Bearer ${(this._user as Auth.AuthenticatedUser).token}`
    //   }
    // );
  }

  hydrate(url: string) {
    fetch(url, { headers: this.authorization }).then((res) => res.json());
  }

  renderSignInButton() {
    return html` <a id="login-button" href="login.html">LOGIN</a> `;
  }

  renderSignOutButton() {
    return html`
      <button
        @click=${(e: UIEvent) => {
          Events.relay(e, "auth:message", ["auth/signout"]);
        }}
      >
        Sign Out
      </button>
    `;
  }

  render() {
    return html`
      <a slot="actuator">Hello, ${this.userid || "movie goer"}</a>

      ${this.loggedIn ? this.renderSignOutButton() : this.renderSignInButton()}
    `;
  }

  static styles = [
    css`
      #login-button {
        /* display: flex;
        align-items: center; */
        padding: 0 16px;
        /* line-height: 70px; */
        color: var(--color-main-support);
        text-align: center;
        text-decoration: none;
        font-size: var(--p-font-size);
        height: 100%;
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
      }

      #login-button:hover {
        background-color: var(--color-sub-background);
        color: var(--color-main-support);
      }
    `,
  ];
}
