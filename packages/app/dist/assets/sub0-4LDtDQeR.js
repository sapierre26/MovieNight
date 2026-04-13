import{i as h,x as m,r as p,a as b,b as u,n as d,d as f,c as g}from"./reset.css-DsRfXeZi.js";var v=Object.defineProperty,n=(c,o,t,s)=>{for(var r=void 0,a=c.length-1,l;a>=0;a--)(l=c[a])&&(r=l(o,t,r)||r);return r&&v(o,t,r),r};const i=class i extends h{constructor(){super(...arguments),this.formData={},this.redirect="/"}get canSubmit(){return!!(this.api&&this.formData.username&&this.formData.password)}render(){return m`
      <form
        @change=${o=>this.handleChange(o)}
        @submit=${o=>this.handleSubmit(o)}
      >
        <slot></slot>
        <slot name="button">
          <button class="login-button" ?disabled=${!this.canSubmit} type="submit">Login</button>
        </slot>
        <p class="error">${this.error}</p>
      </form>
    `}handleChange(o){const t=o.target,s=t?.name,r=t?.value,a=this.formData;switch(s){case"username":this.formData={...a,username:r};break;case"password":this.formData={...a,password:r};break}}handleSubmit(o){o.preventDefault(),this.canSubmit&&fetch(this?.api||"",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.formData)}).then(t=>{if(t.status!==200)throw"Login failed";return t.json()}).then(t=>{const{token:s}=t,r=new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signin",{token:s,redirect:this.redirect}]});console.log("dispatching message",r),this.dispatchEvent(r)}).catch(t=>{console.log(t),this.error=t.toString()})}};i.styles=[p.styles,b`
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
        border: var(--border-thickness-content) solid var(--color-sub-background);
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
    `];let e=i;n([u()],e.prototype,"formData");n([d()],e.prototype,"api");n([d()],e.prototype,"redirect");n([u()],e.prototype,"error");f({"mu-auth":g.Provider,"login-form":e});
