import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import reset from "../styles/reset.css.js";

interface NewUserFormData {
  username?: string;
  password?: string;
  image?: string;
  name?: string;
  hometown?: string;
  bio?: string;
}

export class NewUserFormElement extends LitElement {
  @state()
  formData: NewUserFormData = {};

  @property()
  api?: string;

  @property()
  redirect: string = "/login.html";

  @state()
  error?: string;

  get canSubmit(): boolean {
    return Boolean(
      this.api &&
        this.formData.username &&
        this.formData.password &&
        this.formData.name,
    );
  }

  override render() {
    return html`
      <form
        @change=${(e: InputEvent) => this.handleChange(e)}
        @submit=${(e: SubmitEvent) => this.handleSubmit(e)}
      >
        <slot></slot>
        <slot name="button">
          <button
            class="login-button"
            ?disabled=${!this.canSubmit}
            type="submit"
          >
            Signup
          </button>
        </slot>
        <p class="error">${this.error}</p>
      </form>
    `;
  }

  static styles = [
    reset.styles,

    css`
      .error:not(:empty) {
        color: var(--color-error);
        border: 1px solid var(--color-error);
        padding: var(--size-spacing-medium);
      }

      .login-button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 0.5rem;
        background-color: var(--color-sub-background);
        color: var(--color-button-text);
        text-align: center;
        text-decoration: none;
        width: 100%;
        max-width: 300px;
        height: 30px;
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--p-font-size);
        border: var(--border-thickness-content) solid
          var(--color-sub-background);
        border-radius: var(--border-sub-radius-content);
        cursor: pointer;
        transition: transform 0.3s ease;
      }

      .login-button:hover {
        background-color: var(--color-button-text);
        color: var(--color-sub-background);
        transform: scale(1.03);
      }

      .login-button:active {
        transform: scale(1.03);
      }
    `,
  ];

  handleChange(event: InputEvent) {
    const target = event.target as HTMLInputElement;
    const name = target?.name;
    const value = target?.value;
    const prevData = this.formData;

    if (!name) {
      return;
    }

    this.formData = { ...prevData, [name]: value };
  }

  handleSubmit(submitEvent: SubmitEvent) {
    submitEvent.preventDefault();

    if (this.canSubmit) {
      fetch(this?.api || "", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.formData),
      })
        .then((res) => {
          if (res.status !== 200 && res.status !== 201) throw "Signup failed";
          else return res.json();
        })
        .then(() => {
          window.location.href = this.redirect;
        })
        .catch((error: Error) => {
          console.log(error);
          this.error = error.toString();
        });
    }
  }
}
