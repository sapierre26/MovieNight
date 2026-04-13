import{i as d,x as f,r as p,a as m,b as l,n as h,d as b,c as g}from"./reset.css-DsRfXeZi.js";var v=Object.defineProperty,n=(u,r,t,s)=>{for(var o=void 0,e=u.length-1,c;e>=0;e--)(c=u[e])&&(o=c(r,t,o)||o);return o&&v(r,t,o),o};const i=class i extends d{constructor(){super(...arguments),this.formData={},this.redirect="/login.html"}get canSubmit(){return!!(this.api&&this.formData.username&&this.formData.password&&this.formData.name)}render(){return f`
      <form
        @change=${r=>this.handleChange(r)}
        @submit=${r=>this.handleSubmit(r)}
      >
        <slot></slot>
        <slot name="button">
          <button
            class="signup-button" ?disabled=${!this.canSubmit} type="submit">
            Signup
          </button>
        </slot>
        <p class="error">${this.error}</p>
      </form>
    `}handleChange(r){const t=r.target,s=t?.name,o=t?.value,e=this.formData;s&&(this.formData={...e,[s]:o})}handleSubmit(r){r.preventDefault(),this.canSubmit&&fetch(this?.api||"",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.formData)}).then(t=>{if(t.status!==200&&t.status!==201)throw"Signup failed";return t.json()}).then(()=>{window.location.href=this.redirect}).catch(t=>{console.log(t),this.error=t.toString()})}};i.styles=[p.styles,m`
      .error:not(:empty) {
        color: var(--color-error);
        border: 1px solid var(--color-error);
        padding: var(--size-spacing-medium);
      }

      .signup-button {
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

      .signup-button:hover {
        background-color: var(--color-button-text);
        color: var(--color-sub-background);
        transform: scale(1.03);
      }

      .signup-button:active {
        transform: scale(1.03);
      }
    `];let a=i;n([l()],a.prototype,"formData");n([h()],a.prototype,"api");n([h()],a.prototype,"redirect");n([l()],a.prototype,"error");b({"mu-auth":g.Provider,"newuser-form":a});
