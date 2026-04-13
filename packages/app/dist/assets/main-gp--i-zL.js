import{c as Q,a as m,i as c,O as At,x as l,e as Lt,b as d,V as Yt,h as U,n as a,r as z,d as qt,s as Mt,_ as Dt}from"./reset.css-DsRfXeZi.js";const Ft={};function Rt(o,t,r){const[s,e,i]=o,n=o[0];switch(s){case"profile/save":{const{username:P}=e;return[t,Et(e,r,i).then(O=>["profile/load",{username:P,profile:O}])]}case"profile/request":{const{username:P}=e;return[t,Wt(e,r).then(O=>["profile/load",{username:P,profile:O}])]}case"profile/load":{const{profile:P}=e;return{...t,profile:P}}default:throw new Error(`Unhandled Auth message "${n}"`)}}function Wt(o,t){return fetch(`/api/movie-goers/${o.username}`,{headers:Q.headers(t)}).then(r=>{if(r.status===200)return r.json();throw"No Response from server"}).then(r=>{if(r)return r;throw"No JSON in response from server"})}function Et(o,t,r){const s={...o.profile,newPassword:o.newPassword};return fetch(`/api/movie-goers/${o.username}`,{method:"PUT",headers:{"Content-Type":"application/json",...Q.headers(t)},body:JSON.stringify(s)}).then(e=>{if(e.status===200)return e.json();throw new Error(`Failed to save profile for ${o.username}`)}).then(e=>{if(e)return r.onSuccess&&r.onSuccess(),e;throw new Error("No JSON in API response")}).catch(e=>{throw r.onFailure&&r.onFailure(e),e})}const Ut=m`
    .login-out {
        padding: 10px 20px;
        background-color: var(--color-sub-background);
        color: var(--color-button-text);
        text-align: center;
        text-decoration: none;
        width: auto;
        height: 100%;
        font-size: var(--p-font-size);
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        border: 1px solid var(--color-sub-support);
        border-radius: var(--border-sub-radius-content);
        cursor: pointer;
      }

      .login-out:hover {
        background-color: var(--color-button-text);
        color: var(--color-sub-background);
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

      #profile-icon {
        width: 100%;
        max-width: 40px;
        height: 40px;
        object-fit: cover;
      }
`,Ht={styles:Ut};var Jt=Object.defineProperty,Pt=(o,t,r,s)=>{for(var e=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=n(t,r,e)||e);return e&&Jt(t,r,e),e};const it=class it extends c{constructor(){super(...arguments),this._authObserver=new At(this,"Blazing:auth"),this.loggedIn=!1}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{this._user=t.user;const{user:r}=t;r&&r.authenticated?(this.loggedIn=!0,this.username=r.username):(this.loggedIn=!1,this.username=void 0)})}get authorization(){return this._user?.authenticated?{Authorization:`Bearer ${this._user.token}`}:{}}hydrate(t){fetch(t,{headers:this.authorization}).then(r=>r.json())}renderSignInButton(){return l` <a href="login.html"><button class="login-out">LOGIN</button></a> `}renderSignOutButton(){return l`
      <button class="login-out"
        @click=${t=>{Lt.relay(t,"auth:message",["auth/signout"])}}
      >
        LOGOUT
      </button>
    `}render(){const t=this.loggedIn&&this.username?`/movie-night/user-profile/${this.username}`:"login.html";return l`
      <a id="intro" slot="actuator">Hello, ${this.username||"Moviegoer"} !</a>

      ${this.loggedIn?this.renderSignOutButton():this.renderSignInButton()}

      <a href="${t}">
        <img id="profile-icon" src="/images/profile-icon-black.png" alt="Profile Icon" />
      </a>      
    `}};it.styles=[Ht.styles,m`
      :host {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      #intro {
        flex-wrap: nowrap;
      }

      #profile-icon {
        width: 40px;
        height: 40px;
        object-fit: cover;
      }
    `];let B=it;Pt([d()],B.prototype,"loggedIn");Pt([d()],B.prototype,"username");const ot=class ot extends c{render(){return l`
      <div class="home-page">
        <!--THEATERS NEAR YOU-->
        <section class="theaters-near-you">
          <h2>THEATERS NEAR YOU</h2>
          <a href="/movie-night/theaters"><h3>SEE MORE THEATERS</h3></a>

          <theaters-near-you-list src="/functions/theaters-near-you-data.json"></theaters-near-you-list>
        </section>

        <!--ALL MOVIES CURRENTLY PLAYING SLIDER-->
        <section class="horizontal-slider-section">
          <horizontal-slider sectionTitle="MOVIES OUT NOW" seeMoreHref="/movie-night/movies-out-now" seeMoreText="SEE ALL MOVIES OUT NOW" src="/functions/slider-movies-out-now-data.json"></horizontal-slider>
        </section>

        <!--COMING SOON TO THEATERS SLIDER-->
        <section class="horizontal-slider-section">
          <horizontal-slider sectionTitle="COMING SOON" src="/functions/slider-coming-soon-data.json"></horizontal-slider>
        </section>

        <!--GREATEST SOUNDTRACKS OF ALL TIME-->
        <section class="horizontal-slider-section">
          <horizontal-slider sectionTitle="GREATEST SOUNDTRACKS OF ALL TIME" seeMoreHref="/movie-night/music-library" seeMoreText="SEE ALL GREATEST SOUNDTRACKS" src="/functions/slider-greatest-soundtracks-data.json"></horizontal-slider>
        </section>
      </div>
    `}};ot.styles=[m`
      .home-page {
        margin: var(--margin-for-body);
        padding: var(--padding-insider);
      }

      .theaters-near-you h2 {
        margin-bottom: 5px;
        color: var(--color-main-support);
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h2-font-size);
      }

      .theaters-near-you h3 {
        margin-top: 5px;
        color: var(--color-main-support);
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h3-font-size);
      }
    `];let V=ot;var Kt=Object.defineProperty,q=(o,t,r,s)=>{for(var e=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=n(t,r,e)||e);return e&&Kt(t,r,e),e};const at=class at extends Yt{constructor(){super("Blazing:model"),this.mode="view",this.editProfile={},this.togglePasswordVisibility=!1}get profile(){return this.model?.profile}connectedCallback(){super.connectedCallback?.(),this.username&&this.dispatchMessage(["profile/request",{username:this.username}])}attributeChangedCallback(t,r,s){super.attributeChangedCallback(t,r,s),t==="username"&&s!==r&&this.dispatchMessage(["profile/request",{username:s}]),t==="mode"&&s==="edit"&&this.profile&&(this.editProfile={...this.profile??{}})}handleSubmit(t){t.preventDefault();const{username:r,hashedPassword:s,image:e,name:i,hometown:n,bio:P}=this.editProfile,O={username:r||this.username,image:e||"/images/user-placeholder.png",name:i||"",hometown:n||"",bio:P||""},Gt=s?.trim()?s:void 0;this.dispatchMessage(["profile/save",{username:this.username,profile:O,newPassword:Gt},{onSuccess:()=>U.dispatch(this,"history/navigate",{href:`/movie-night/user-profile/${this.username}`}),onFailure:It=>this._error=It}])}renderView(){return l`
      <div class="profile">
        <section class="profile-background">
          <div class="user-info">
            <div class="profile-img">
              <img
                src="${this.profile?.image||"/images/user-placeholder.png"}"
                alt="Moviegoer"
              />
            </div>

            <div class="profile-text">
              <h2>Username: ${this.profile?.username}</h2>

              <br />

              <h2>Name: ${this.profile?.name}</h2>
              <h3>Hometown: ${this.profile?.hometown}</h3>
              <h3>Bio: ${this.profile?.bio}</h3>
            </div>
          </div>

          <div class="edit">
            <button
              class="edit-profile-button"
              @click=${()=>U.dispatch(this,"history/navigate",{href:`/movie-night/user-profile/${this.username}/edit`})}
            >
              Edit Profile
            </button>
          </div>
        </section>
      </div>
    `}renderEditor(){return l`
      <main class="page">
        <form @submit=${this.handleSubmit}>
          <div class="edit-form-group">
            <label>
              <span>Username: </span>
              <input
                type="text"
                name="username"
                .value=${this.editProfile.username??""}
                @input=${t=>this.editProfile={...this.editProfile,username:t.target.value}}
              />
            </label>

            <label>
              <span>Password: </span>
              <input
                name="password"
                id="passwordInput"
                .type=${this.togglePasswordVisibility?"text":"password"}
                .value=${this.editProfile.hashedPassword??""}
                @input=${t=>this.editProfile={...this.editProfile,hashedPassword:t.target.value}}
              />
            </label>

            <label id="showPassword">
              <input
                type="checkbox"
                @change=${t=>this.togglePasswordVisibility=t.target.checked}
              />
              Show Password
            </label>

            <label>
              <span>Profile Image Path: </span>
              <input
                type="text"
                name="image"
                .value=${this.editProfile.image??""}
                @input=${t=>this.editProfile={...this.editProfile,image:t.target.value}}
              />
            </label>

            <label>
              <span>Name: </span>
              <input
                type="text"
                name="name"
                .value=${this.editProfile.name??""}
                @input=${t=>this.editProfile={...this.editProfile,name:t.target.value}}
              />
            </label>

            <label>
              <span>Hometown: </span>
              <input
                type="text"
                name="hometown"
                .value=${this.editProfile.hometown??""}
                @input=${t=>this.editProfile={...this.editProfile,hometown:t.target.value}}
              />
            </label>

            <label>
              <span>Bio: </span>
              <textarea
                name="bio"
                @input=${t=>this.editProfile={...this.editProfile,bio:t.target.value}}
              >
${this.editProfile.bio??""}</textarea
              >
            </label>
          </div>

          <button class="save-profile-button" type="submit">
            Save Profile Changes
          </button>
          <button
            class="cancel-button"
            type="button"
            @click=${()=>U.dispatch(this,"history/navigate",{href:`/movie-night/user-profile/${this.username}`})}
          >
            Cancel
          </button>
        </form>

        ${this._error?l` <p class="error">${this._error}</p>`:""}
      </main>
    `}render(){return this.mode==="view"?this.renderView():this.renderEditor()}};at.styles=[m`
      .profile-background,
      .page {
        background-color: var(--color-main-background);
        margin: var(--margin-for-body);
        padding: var(--padding-insider);
        border-radius: var(--border-radius-content);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }

      .user-info {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: stretch;
      }

      .profile-img {
        width: 100%;
        height: 100%;
      }

      .profile-img img {
        display: block;
        width: 100%;
        max-width: 400px;
        height: auto;
        object-fit: cover;
        border: 1px solid var(--color-sub-support);
      }

      .profile-text {
        display: flex;
        flex-direction: column;
        padding: var(--padding-insider);
        object-fit: cover;
        position: relative;
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

      .edit-form-group input,
      .edit-form-group textarea {
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

      #showPassword {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        white-space: nowrap;
        cursor: pointer;
      }

      .save-profile-button,
      .cancel-button {
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

      .save-profile-button:hover,
      .cancel-button:hover {
        background-color: var(--color-button-text);
        color: var(--color-sub-background);
        transform: scale(1.03);
      }
    `];let g=at;q([a()],g.prototype,"username");q([a()],g.prototype,"mode");q([d()],g.prototype,"editProfile");q([d()],g.prototype,"_error");q([d()],g.prototype,"togglePasswordVisibility");class Vt extends c{render(){return l`
        <movies-out-now-grid src="/api/movies-out-now"></movies-out-now-grid>
    `}}var Xt=Object.defineProperty,M=(o,t,r,s)=>{for(var e=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=n(t,r,e)||e);return e&&Xt(t,r,e),e};const st=class st extends c{connectedCallback(){super.connectedCallback(),this.src&&this.getMovieDetails(this.src)}getMovieDetails(t){fetch(t).then(r=>r.json()).then(r=>{if(r){const s=r.find(e=>e.outNowName===this.outNowName);this.outNowName=s.outNowName,this.releaseYear=s.releaseYear,this.runtime=s.runtime,this.imgSrc=s.imgSrc}})}render(){return l`
            <div class="movie-bio">
                <section class="movie-bio-background">
                    <h1>${this.outNowName}</h1>
                    <h2>${this.releaseYear} | ${this.runtime}</h2>

                    <img src="${this.imgSrc}" alt="${this.outNowName}">
                    <theaters-subitem-list src="/functions/theaters-subitem-data.json"></theaters-subitem-list>
                </section> 
            </div>
        `}};st.styles=[m`
            .movie-bio-background {
                background-color: var(--color-main-background);
                margin: var(--margin-for-body);
                padding: var(--padding-insider);
                border-radius: var(--border-radius-content);
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            }

            .movie-bio-background h1 {
                color: var(--color-main-support);
                font-family: var(--main-font-family);
                font-weight: var(--main-font-weight);
                font-style: var(--main-font-type);
                font-size: var(--h1-font-size);
            }

            .movie-bio-background h2 {
                color: var(--color-main-support);
                font-family: var(--main-font-family);
                font-weight: var(--main-font-weight);
                font-style: var(--main-font-type);
                font-size: var(--h2-font-size);
            }

            .movie-bio-background img {
                display: block;
                width: 100%;
                max-width: 1000px;
                height: auto;
                object-fit: cover;
            }

            .movie-bio-text {
                margin-top: 25px;
            }

            .movie-bio-text p {
                color: var(--color-main-support);
                font-family: var(--main-alternative-font-family);
                font-weight: var(--main-alternative-font-weight);
                font-style: var(--main-font-type);
                font-size: var(--p-font-size-bigger);
            }
        `];let b=st;M([a()],b.prototype,"src");M([a()],b.prototype,"outNowName");M([a()],b.prototype,"releaseYear");M([a()],b.prototype,"runtime");M([a({attribute:"img-src"})],b.prototype,"imgSrc");const nt=class nt extends c{filterByGenre(t){this.renderRoot.querySelector("#movie-library-grid")?.filterByGenre(t)}render(){return l`
        <div class="sub-nav-bar">
            <div class="sub-nav-bar-content">
                <p>FILTER BY GENRE</p>

                <div class="sub-nav-bar-links">
                    <a @click=${()=>this.filterByGenre(null)}>ALL MOVIES</a>
                    <a @click=${()=>this.filterByGenre("3D")}>3D</a>
                    <a @click=${()=>this.filterByGenre("Action")}>Action</a>
                    <a @click=${()=>this.filterByGenre("Adventure")}>Adventure</a>
                    <a @click=${()=>this.filterByGenre("Animated")}>Animated</a>
                    <a @click=${()=>this.filterByGenre("Classic")}>Classic</a>
                    <a @click=${()=>this.filterByGenre("Comedy")}>Comedy</a>
                    <a @click=${()=>this.filterByGenre("Crime")}>Crime</a>
                    <a @click=${()=>this.filterByGenre("Dance")}>Dance</a>
                    <a @click=${()=>this.filterByGenre("Documentaries")}>Documentaries</a>
                    <a @click=${()=>this.filterByGenre("Drama")}>Drama</a>
                    <a @click=${()=>this.filterByGenre("Family")}>Family</a>
                    <a @click=${()=>this.filterByGenre("Fantasy")}>Fantasy</a>
                    <a @click=${()=>this.filterByGenre("Film, TV, Radio")}>Film, TV, Radio</a>
                    <a @click=${()=>this.filterByGenre("Foreign")}>Foreign</a>
                    <a @click=${()=>this.filterByGenre("Historical Film")}>Historical Film</a>
                    <a @click=${()=>this.filterByGenre("Horror")}>Horror</a>
                    <a @click=${()=>this.filterByGenre("IMAX")}>IMAX</a>
                    <a @click=${()=>this.filterByGenre("Indie")}>Indie</a>
                    <a @click=${()=>this.filterByGenre("Performance Arts")}>Peformance Arts</a>
                    <a @click=${()=>this.filterByGenre("Romance")}>Romance</a>
                    <a @click=${()=>this.filterByGenre("Sci-Fi")}>Sci-Fi</a>
                    <a @click=${()=>this.filterByGenre("Special Events")}>Special Events</a>
                    <a @click=${()=>this.filterByGenre("Sport")}>Sport</a>
                    <a @click=${()=>this.filterByGenre("Spy Films")}>Spy Film</a>
                    <a @click=${()=>this.filterByGenre("Suspense")}>Suspense</a>
                    <a @click=${()=>this.filterByGenre("Thriller")}>Thriller</a>
                    <a @click=${()=>this.filterByGenre("War")}>War</a>
                    <a @click=${()=>this.filterByGenre("Western")}>Western</a> 
                </div>
            </div>
        </div>

        <movie-library-grid id="movie-library-grid" src="/api/movie-library"></movie-library-grid>
    `}};nt.styles=[m`
      .sub-nav-bar {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--padding-body);
        background-color: var(--color-main-background);
      }

      .sub-nav-bar-content {
        width: 100%;
      }

      .sub-nav-bar p {
        text-align: left;
        color: var(--color-main-support);
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h3-font-size);
      }

      .sub-nav-bar-links {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
        gap: 1.25rem;
        width: 100%;
        justify-items: center;
      }

      .sub-nav-bar-links a {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        background-color: var(--color-sub-background);
        color: var(--color-button-text);
        text-align: center;
        text-decoration: none;
        width: 145px;
        height: 45px;
        font-size: 17px;
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        border: var(--border-thickness-content) solid var(--color-sub-background);
        border-radius: var(--border-radius-content);
        cursor: pointer;
      }

      .sub-nav-bar-links a:hover {
        background-color: var(--color-button-text);
        color: var(--color-sub-background);
      }
    `];let X=nt;var Qt=Object.defineProperty,u=(o,t,r,s)=>{for(var e=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=n(t,r,e)||e);return e&&Qt(t,r,e),e};const lt=class lt extends c{connectedCallback(){super.connectedCallback(),this.src&&this.getMovieDetails(this.src)}getMovieDetails(t){fetch(t).then(r=>r.json()).then(r=>{if(r){const s=r.find(e=>e.movieName===this.movieName);this.movieName=s.movieName,this.releaseYear=s.releaseYear,this.runtime=s.runtime,this.imgSrc=s.imgSrc,this.director=s.director,this.producer=s.producer,this.writers=s.writers,this.cinematography=s.cinematography,this.music=s.music,this.starring=s.starring,this.distributor=s.distributor,this.plot=s.plot}})}render(){return l`
            <div class="movie-bio">
                <section class="movie-bio-background">
                    <h1>${this.movieName}</h1>
                    <h2>${this.releaseYear} | ${this.runtime}</h2>

                    <img src="${this.imgSrc}" alt="${this.movieName}" />

                    <div class="movie-bio-text">
                        <p>Director: ${this.director}</p>
                        <p>Producer(s): ${this.producer}</p>
                        <p>Writer(s): ${this.writers}</p>
                        <p>Cinematography: ${this.cinematography}</p>
                        <p>Music By: ${this.music}</p>
                        <p>
                            Starring: ${this.starring}
                        </p>
                        <p>Distributed By: ${this.distributor}</p>
                        <p>
                            Plot Summary: ${this.plot}
                        </p>
                    </div>
                </section>
                </div>
        `}};lt.styles=[m`
            .movie-bio-background {
                background-color: var(--color-main-background);
                margin: var(--margin-for-body);
                padding: var(--padding-insider);
                border-radius: var(--border-radius-content);
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            }

            .movie-bio-background h1 {
                color: var(--color-main-support);
                font-family: var(--main-font-family);
                font-weight: var(--main-font-weight);
                font-style: var(--main-font-type);
                font-size: var(--h1-font-size);
            }

            .movie-bio-background h2 {
                color: var(--color-main-support);
                font-family: var(--main-font-family);
                font-weight: var(--main-font-weight);
                font-style: var(--main-font-type);
                font-size: var(--h2-font-size);
            }

            .movie-bio-background img {
                display: block;
                width: 100%;
                max-width: 1000px;
                height: auto;
                object-fit: cover;
            }

            .movie-bio-text {
                margin-top: 25px;
            }

            .movie-bio-text p {
                color: var(--color-main-support);
                font-family: var(--main-alternative-font-family);
                font-weight: var(--main-alternative-font-weight);
                font-style: var(--main-font-type);
                font-size: var(--p-font-size-bigger);
            }
        `];let h=lt;u([a()],h.prototype,"src");u([a()],h.prototype,"movieName");u([a()],h.prototype,"releaseYear");u([a()],h.prototype,"runtime");u([a({attribute:"img-src"})],h.prototype,"imgSrc");u([a()],h.prototype,"director");u([a()],h.prototype,"producer");u([a()],h.prototype,"writers");u([a()],h.prototype,"cinematography");u([a()],h.prototype,"music");u([a()],h.prototype,"starring");u([a()],h.prototype,"distributor");u([a()],h.prototype,"plot");class Zt extends c{render(){return l`
        <theaters-list src="/api/theaters"></theaters-list>
    `}}var te=Object.defineProperty,D=(o,t,r,s)=>{for(var e=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=n(t,r,e)||e);return e&&te(t,r,e),e};const ct=class ct extends c{connectedCallback(){super.connectedCallback(),this.src&&this.getTheaterDetails(this.src)}getTheaterDetails(t){fetch(t).then(r=>r.json()).then(r=>{if(r){const s=r.find(e=>e.movieName===this.movieName);this.movieName=s.movieName,this.releaseYear=s.releaseYear,this.runtime=s.runtime,this.imgSrc=s.imgSrc}})}render(){return l`
            <div class="movie-bio">
                <section class="movie-bio-background">
                    <h1>${this.movieName}</h1>
                    <h2>${this.releaseYear} | ${this.runtime}</h2>

                    <img src="${this.imgSrc}" alt="${this.movieName}">

                    <theater-subitem-list src="/functions/theater-subitem-data.json"></theater-subitem-list>
                </section>
            </div>
        `}};ct.styles=[m`
            .movie-bio-background {
                background-color: var(--color-main-background);
                margin: var(--margin-for-body);
                padding: var(--padding-insider);
                border-radius: var(--border-radius-content);
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            }

            .movie-bio-background h1 {
                color: var(--color-main-support);
                font-family: var(--main-font-family);
                font-weight: var(--main-font-weight);
                font-style: var(--main-font-type);
                font-size: var(--h1-font-size);
            }

            .movie-bio-background h2 {
                color: var(--color-main-support);
                font-family: var(--main-font-family);
                font-weight: var(--main-font-weight);
                font-style: var(--main-font-type);
                font-size: var(--h2-font-size);
            }

            .movie-bio-background img {
                display: block;
                width: 100%;
                max-width: 1000px;
                height: auto;
                object-fit: cover;
            }

            .movie-bio-text {
                margin-top: 25px;   
            }

            .movie-bio-text p {
                color: var(--color-main-support);
                font-family: var(--main-alternative-font-family);
                font-weight: var(--main-alternative-font-weight);
                font-style: var(--main-font-type);
                font-size: var(--p-font-size-bigger);
            }
        `];let y=ct;D([a()],y.prototype,"src");D([a()],y.prototype,"movieName");D([a()],y.prototype,"releaseYear");D([a()],y.prototype,"runtime");D([a({attribute:"img-src"})],y.prototype,"imgSrc");class ee extends c{render(){return l`
        <soundtrack-library-grid src="/api/music-library"></soundtrack-library-grid>
    `}}var re=Object.defineProperty,v=(o,t,r,s)=>{for(var e=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=n(t,r,e)||e);return e&&re(t,r,e),e};const mt=class mt extends c{constructor(){super(...arguments),this.soundtracks=[]}connectedCallback(){super.connectedCallback(),this.src&&this.getPlaylistDetails(this.src)}getPlaylistDetails(t){fetch(t).then(r=>r.json()).then(r=>{if(r){const s=r.find(e=>e.soundtrackName===this.soundtrackName);s&&(this.soundtrackName=s.soundtrackName,this.releaseYear=s.releaseYear,this.runtime=s.runtime,this.soundtracks=s.soundtracks)}})}render(){return l`
            <div class="playlist-bio">
                <section class="playlist-heading">
                    <h1>${this.soundtrackName}</h1>
                    <h2>${this.releaseYear} | ${this.runtime}</h2>
                </section>

                <div class="playlist-list">
                    ${this.soundtracks.map(t=>l`
                            <article class="playlist-item">
                                <article class="playlist-item-img">
                                    <slot name="img-src"><img src="${t.imgSrc}" alt="${t.songName}"></slot>
                                </article>

                                <article class="playlist-text">
                                    <h2><slot name="song-name">${t.songName}</slot></h2>
                                    <h3><slot name="song-length">${t.songLength}</slot></h3>

                                    <p><slot name="credits">Credits: ${t.credits}</slot></p>
                                    <a href="${t.href}"><svg class="icon" id="play-button"><use href="/icons/movie-night.svg#icon-play-button" /></svg></a>
                                </article>
                            </article>
                        `)}
                </div>
                // <playlist-list src="/functions/playlist-data.json"></playlist-list>
            </div>
        `}};mt.styles=[m`
            .playlist-list {
                margin-top: var(--margin-for-body);
            }
            .playlist-bio {
                margin: var(--margin-for-body);
            }

            .playlist-heading {
                background-color: var(--color-main-background);
                padding: var(--padding-insider);
                border-radius: var(--border-radius-content);
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            }

            .playlist-heading h1 {
                color: var(--color-main-support);
                font-family: var(--main-font-family);
                font-weight: var(--main-font-weight);
                font-style: var(--main-font-type);
                font-size: var(--h1-font-size);
            }

            .playlist-heading h2 {
                color: var(--color-main-support);
                font-family: var(--main-font-family);
                font-weight: var(--main-font-weight);
                font-style: var(--main-font-type);
                font-size: var(--h2-font-size);
            }

            .playlist-item {
                display: grid;
                grid-template-columns: 500px 1fr;
                align-items: stretch;
                margin-top: 25px;
                transition: transform 0.3s ease;
            }

            .playlist-item:hover {
                transform: scale(1.03);
            }
            
            .playlist-item-img {
                width: 100%;
                height: 100%;
            }

            .playlist-item-img img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-top-left-radius: var(--border-radius-content);
                border-bottom-left-radius: var(--border-radius-content);
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            }

            .playlist-text {
                display: flex;
                flex-direction: column;
                object-fit: cover;
                position: relative;
                padding: var(--padding-insider);
                border-top-right-radius: var(--border-radius-content);
                border-bottom-right-radius: var(--border-radius-content);
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            }

            .playlist-text h2 {
                color: var(--color-main-support);
                font-family: var(--main-font-family);
                font-weight: var(--main-font-weight);
                font-style: var(--main-font-type);
                font-size: var(--h2-font-size);
            }

            .playlist-text h3 {
                color: var(--color-main-support);
                font-family: var(--main-alternative-font-family);
                font-weight: var(--main-alternative-font-weight);
                font-style: var(--main-font-type);
                font-size: var(--h3-font-size);
            }

            .playlist-text p {
                color: var(--color-main-support);
                font-family: var(--main-alternative-font-family);
                font-weight: var(--main-alternative-font-weight);
                font-style: var(--main-font-type);
                font-size: var(--p-font-size);
            }

            #play-button {
                display: inline;
                width: 64px;
                height: 64px;
                vertical-align: top;
                fill: var(--color-main-support);
                position: absolute;
                bottom: 10px;
                right: 10px;
            }

            @media (max-width: 850px) {
                .playlist-item {
                    grid-template-columns: 1fr;
                    grid-template-rows: auto auto;
                }

                .playlist-item-img img {
                    height: auto;
                    border-top-left-radius: var(--border-radius-content);
                    border-top-right-radius: var(--border-radius-content);
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                }

                .playlist-text {
                    border-bottom-left-radius: var(--border-radius-content);
                    border-bottom-right-radius: var(--border-radius-content);
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;
                }
            }
        `];let f=mt;v([a()],f.prototype,"src");v([a()],f.prototype,"soundtrackName");v([a()],f.prototype,"releaseYear");v([a()],f.prototype,"runtime");v([a()],f.prototype,"soundtracks");v([a({attribute:"img-src"})],f.prototype,"imgSrc");v([a({attribute:"song-name"})],f.prototype,"songName");v([a({attribute:"song-length"})],f.prototype,"songLength");v([a({attribute:"credits"})],f.prototype,"credits");v([a()],f.prototype,"href");class ie extends c{render(){return l`
        <artifact-library-grid src="/api/famous-film-artifacts"></artifact-library-grid>
    `}}var oe=Object.defineProperty,N=(o,t,r,s)=>{for(var e=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=n(t,r,e)||e);return e&&oe(t,r,e),e};const ht=class ht extends c{constructor(){super(...arguments),this.images=[]}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(t){fetch(t).then(r=>r.json()).then(r=>{r&&(this.images=r)})}firstUpdated(){this.updateHorizontalSlider()}updateHorizontalSlider(){this.renderRoot.querySelectorAll(".horizontal-slider-gallery-wrap").forEach(r=>{const s=r.querySelector(".horizontal-slider-gallery"),e=r.querySelector(".left-arrow"),i=r.querySelector(".right-arrow");!s||!e||!i||(i?.addEventListener("click",()=>{s.scrollBy({left:s.clientWidth,behavior:"smooth"})}),e?.addEventListener("click",()=>{s.scrollBy({left:-s.clientWidth,behavior:"smooth"})}),s.addEventListener("scroll",()=>{const n=s.scrollWidth-s.clientWidth;e.style.display=s.scrollLeft>0?"flex":"none",i.style.display=s.scrollLeft>=n-5?"none":"flex"}))})}render(){return l`
      <section class="horizontal-slider-section">
        <h2>${this.sectionTitle}</h2>
        <a href="${this.seeMoreHref}"><h3>${this.seeMoreText}</h3></a>

        <div class="horizontal-slider-gallery-wrap">
          <button class="arrow left-arrow">&#10094;</button>

          <div class="horizontal-slider-gallery">
            <div>
              ${this.images.map(t=>l`
                  <span>
                    <a href="${t.href?t.href+t.movieName:this.href+t.movieName}"
                      ><slot name="img-src"
                        ><img
                          src="${t.imgSrc}"
                          alt="${t.movieName}" /></slot
                    ></a>
                  </span>
                `)}
            </div>
          </div>

          <button class="arrow right-arrow">&#10095;</button>
        </div>
      </section>
    `}};ht.styles=[z.styles,m`
      .horizontal-slider-section h2 {
        margin-bottom: 5px;
        color: var(--color-main-support);
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h2-font-size);
      }

      .horizontal-slider-section h3 {
        margin-top: 5px;
        color: var(--color-main-support);
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h3-font-size);
      }

      .horizontal-slider-gallery-wrap {
        position: relative;
        width: 100%;
        overflow: hidden;
      }

      .horizontal-slider-gallery-wrap button {
        border-radius: 30px;
      }

      .horizontal-slider-gallery {
        display: flex;
        flex-wrap: nowrap;
        width: var(--width-horizontal-slider-container);
        overflow-x: auto;
        scroll-behavior: smooth;
      }

      .horizontal-slider-gallery div {
        display: flex;
        gap: 1rem;
      }

      .horizontal-slider-gallery div span {
        flex: 0 0 auto;
      }

      .horizontal-slider-gallery div img {
        width: var(--width-slider-imgs);
        height: var(--height-slider-imgs);
        object-fit: cover;
      }

      .horizontal-slider-gallery::-webkit-scrollbar {
        display: none;
      }

      .arrow {
        display: flex;
        align-items: center;
        justify-content: center;
        top: 50%;
        position: absolute;
        width: 50px;
        height: 50px;
        background-color: var(--color-sub-background);
        color: var(--color-button-text);
        font-size: var(--h3-font-size);
        border: none;
        cursor: pointer;
        transform: translateY(-50%);
      }

      .arrow:hover {
        background-color: var(--color-button-text);
        color: var(--color-sub-background);
      }

      .left-arrow {
        display: none;
        position: absolute;
        left: 0px;
      }

      .right-arrow {
        position: absolute;
        right: 0px;
      }
    `];let p=ht;N([a()],p.prototype,"sectionTitle");N([a()],p.prototype,"seeMoreHref");N([a()],p.prototype,"seeMoreText");N([a()],p.prototype,"src");N([d()],p.prototype,"images");N([a({attribute:"img-src"})],p.prototype,"imgSrc");N([a()],p.prototype,"movieName");N([a()],p.prototype,"href");var ae=Object.defineProperty,F=(o,t,r,s)=>{for(var e=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=n(t,r,e)||e);return e&&ae(t,r,e),e};const dt=class dt extends c{constructor(){super(...arguments),this.squares=0}render(){return l`
        <article class="out-now-grid-item">
            <article class="out-now-grid-item-img">
                <slot name="img-src"><img src="${this.imgSrc}" alt="${this.outNowName}"></slot>
            </article>
        
            <article class="out-now-grid-item-text">
                <p><slot name="out-now-name">${this.outNowName}</slot></p>
                <div class="squares">
                    ${Array(this.squares).fill(0).map(()=>l`
                            <div class="square"></div>
                        `)}
                </div>

                <article class="buttons">
                    <a href="/movie-night/movies-out-now/${this.outNowName}"><button><slot name="see-movie-times">See Movie Times</slot></button></a>
                    <a href="${this.watchTrailerNowButton}"><button><slot name="watch-movie-trailer">Watch Trailer Now</slot></button></a>
                </article>
            </article>
        </article>
    `}};dt.styles=[z.styles,m`
        .out-now-grid-item {
            display: flex;
            padding: var(--padding-insider);
            flex: 1;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 250px;
            width: 250px;
            height: auto;
            background-color: var(--color-main-background);
            border-radius: var(--border-radius-content);
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            transition: transform 0.3s ease;
        }

        .out-now-grid-item:hover {
            transform: scale(1.03);
        }

        .out-now-grid-item-img img {
            width: 200px;
            height: 191px;
            object-fit: cover;
        }

        .out-now-grid-item-text p {
            color: var(--color-main-support);
            font-family: var(--sub-font-family);
            font-weight: var(--main-font-weight);
            font-style: var(--main-font-type);
            font-size: var(--h3-font-size);
        }

        .squares {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            gap: 1rem;
            padding-bottom: 15px;
        }

        .square {
            width: 20px;
            height: 20px;
            background-color: var(--color-main-support);
        }

        .buttons {
            display: flex;
            flex-direction: column;
            row-gap: 1rem;
        }

        .buttons button {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--color-sub-background);
            color: var(--color-button-text);
            text-align: center;
            text-decoration: none;
            width: 200px;
            height: 30px;
            font-family: var(--sub-font-family);
            font-weight: var(--main-font-weight);
            font-style: var(--main-font-type);
            font-size: var(--p-font-size);
            border: var(--border-thickness-content) solid var(--color-sub-background);
            border-radius: var(--border-radius-content);
            cursor: pointer;
            transition: transform 0.3s ease;
        }

        .buttons button:hover {
            background-color: var(--color-button-text);
            color: var(--color-sub-background);
            text-decoration: underline;
            transform: scale(1.03);
        }
    `];let w=dt;F([a({attribute:"img-src"})],w.prototype,"imgSrc");F([a({attribute:"out-now-name"})],w.prototype,"outNowName");F([a({attribute:"squares",type:Number})],w.prototype,"squares");F([a({attribute:"see-movie-times"})],w.prototype,"seeMovieTimesButton");F([a({attribute:"watch-movie-trailer"})],w.prototype,"watchTrailerNowButton");var se=Object.defineProperty,St=(o,t,r,s)=>{for(var e=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=n(t,r,e)||e);return e&&se(t,r,e),e};const ft=class ft extends c{constructor(){super(...arguments),this.moviesOutNowGridItems=[]}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(t){fetch(t).then(r=>r.json()).then(r=>{this.moviesOutNowGridItems=r}).catch(console.error)}renderMoviesOutNowGridItem(t){return l`
      <movies-out-now-grid-item
        img-src="${t.imgSrc}"
        out-now-name="${t.outNowName}"
        squares="${t.squares}"
        see-movie-times="${t.seeMovieTimesButton}"
        watch-movie-trailer="${t.watchTrailerNowButton}"
      >
      </movies-out-now-grid-item>
    `}render(){return l`
      <div class="out-now-grid">
        ${this.moviesOutNowGridItems.map(t=>this.renderMoviesOutNowGridItem(t))}
      </div>
    `}};ft.styles=m`
    .out-now-grid,
        .movie-library-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, 250px);
        gap: 2rem;
        padding: var(--padding-body);
        justify-content: center;
    }
  `;let G=ft;St([a()],G.prototype,"src");St([d()],G.prototype,"moviesOutNowGridItems");var ne=Object.defineProperty,R=(o,t,r,s)=>{for(var e=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=n(t,r,e)||e);return e&&ne(t,r,e),e};const ut=class ut extends c{constructor(){super(...arguments),this.movieTimes=[]}render(){return l`
      <section class="theater-item">
        <h2><slot name="theater-name">${this.theaterName}</slot></h2>
        <h3>${this.theaterLocation} | ${this.distanceFromYou}</h3>

        <div class="showing-times">
          ${this.movieTimes.map(t=>l`
              <button>
                <slot name="movie-time">${t.movieTime}</slot>
              </button>
            `)}
        </div>
      </section>
    `}};ut.styles=[z.styles,m`
      .theater-item {
        margin-top: 25px;
        padding: var(--padding-insider);
        width: auto;
        height: auto;
        border-radius: var(--border-radius-content);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        transition: transform 0.3s ease;
      }

      .theater-item:hover {
        transform: scale(1.03);
      }

      .theater-item h2 {
        color: var(--color-main-support);
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h2-font-size);
      }

      .theater-item h3 {
        color: var(--color-main-support);
        font-family: var(--main-alternative-font-family);
        font-weight: var(--main-alternative-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h3-font-size);
      }

      .showing-times {
        display: flex;
        flex-direction: row;
        gap: 1rem;
      }

      .showing-times button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-sub-background);
        color: var(--color-button-text);
        text-align: center;
        text-decoration: none;
        width: 100px;
        height: 30px;
        font-family: var(--sub-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--p-font-size);
        border: var(--border-thickness-content) solid
          var(--color-sub-background);
        border-radius: var(--border-radius-content);
        object-fit: cover;
        cursor: pointer;
        transition: transform 0.3s ease;
      }

      .showing-times button:hover {
        background-color: var(--color-button-text);
        color: var(--color-sub-background);
        text-decoration: underline;
        transform: scale(1.03);
      }
    `];let x=ut;R([a({attribute:"theater-name"})],x.prototype,"theaterName");R([a({attribute:"theater-location"})],x.prototype,"theaterLocation");R([a({attribute:"distance-from-you"})],x.prototype,"distanceFromYou");R([a({type:Array})],x.prototype,"movieTimes");R([a({attribute:"movie-time"})],x.prototype,"movieTime");var le=Object.defineProperty,jt=(o,t,r,s)=>{for(var e=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=n(t,r,e)||e);return e&&le(t,r,e),e};class Z extends c{constructor(){super(...arguments),this.theatersSubItems=[]}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(t){fetch(t).then(r=>r.json()).then(r=>{if(r){const s=r;this.theatersSubItems=s.theatersSubItems}})}renderTheatersSubItem(t){return l`
      <theaters-subitem
        theater-name="${t.theaterName}"
        theater-location="${t.theaterLocation}"
        distance-from-you="${t.distanceFromYou}"
        .movieTimes="${t.movieTimes}"
      >
      </theaters-subitem>
    `}render(){return l`
      <div class="theaters-subitem-list">
        ${this.theatersSubItems.map(t=>this.renderTheatersSubItem(t))}
      </div>
    `}}jt([a()],Z.prototype,"src");jt([d()],Z.prototype,"theatersSubItems");var ce=Object.defineProperty,H=(o,t,r,s)=>{for(var e=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=n(t,r,e)||e);return e&&ce(t,r,e),e};const pt=class pt extends c{constructor(){super(...arguments),this.squares=0}render(){return l`
        <article class="movie-library-grid-item">
            <article class="movie-library-grid-item-img">
                <img src="${this.imgSrc}" alt="${this.movieName}">
            </article> 

            <article class="movie-library-grid-item-text">
                <p>${this.movieName}</p>
                <div class="squares">
                    ${Array(this.squares).fill(0).map(()=>l`
                            <div class="square"></div>
                        `)}
                </div>

                <a href="/movie-night/movie-library/${this.movieName}"><button><slot name="movie-info">Movie Info</slot></button></a>
            </article>
        </article>
    `}};pt.styles=[z.styles,m`
        .movie-library-grid-item {
            display: flex;
            padding: var(--padding-insider);
            flex: 1;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 250px;
            height: auto;
            background-color: var(--color-main-background);
            border-radius: var(--border-radius-content);
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            transition: transform 0.3s ease;
        }

        .movie-library-grid-item:hover {
            transform: scale(1.03);
        }

        .movie-library-grid-item-img img {
            width: 200px;
            height: 191px;
            object-fit: cover;
        }

        .movie-library-grid-item-text p {
            color: var(--color-main-support);
            font-family: var(--sub-font-family);
            font-weight: var(--main-font-weight);
            font-style: var(--main-font-type);
            font-size: var(--h3-font-size);
        }

        .squares {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            gap: 1rem;
            padding-bottom: 15px;
        }

        .square {
            width: 20px;
            height: 20px;
            background-color: var(--color-main-support);
        }

        .movie-library-grid-item button {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--color-sub-background);
            color: var(--color-button-text);
            text-align: center;
            text-decoration: none;
            width: 200px;
            height: 30px;
            font-family: var(--sub-font-family);
            font-weight: var(--main-font-weight);
            font-style: var(--main-font-type);
            font-size: var(--p-font-size);
            border: var(--border-thickness-content) solid var(--color-sub-background);
            border-radius: var(--border-radius-content);
            cursor: pointer;
            transition: transform 0.3s ease;
        }

        .movie-library-grid-item button:hover {
            background-color: var(--color-button-text);
            color: var(--color-sub-background);
            text-decoration: underline;
            transform: scale(1.03);
        }
    `];let S=pt;H([a({attribute:"img-src"})],S.prototype,"imgSrc");H([a({attribute:"movie-name"})],S.prototype,"movieName");H([a({attribute:"squares",type:Number})],S.prototype,"squares");H([a()],S.prototype,"genres");var me=Object.defineProperty,J=(o,t,r,s)=>{for(var e=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=n(t,r,e)||e);return e&&me(t,r,e),e};const vt=class vt extends c{constructor(){super(...arguments),this.movieLibraryGridItems=[],this.allMovies=[],this.currentGenre=null}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(t){fetch(t).then(r=>r.json()).then(r=>{this.allMovies=r,this.movieLibraryGridItems=r}).catch(console.error)}renderMovieLibraryGridItem(t){return l`
      <movie-library-grid-item
        img-src="${t.imgSrc}"
        movie-name="${t.movieName}"
        squares="${t.squares}"
      >
      </movie-library-grid-item>
    `}filterByGenre(t){if(this.currentGenre=t,!t){this.movieLibraryGridItems=this.allMovies;return}this.movieLibraryGridItems=this.allMovies.filter(r=>r.genres?.includes(t))}render(){return l`
      <div class="movie-library-grid">
        ${this.movieLibraryGridItems.map(t=>this.renderMovieLibraryGridItem(t))}
      </div>
    `}};vt.styles=m`
    .movie-library-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, 250px);
        gap: 2rem;
        padding: var(--padding-body);
        justify-content: center;
    }
  `;let j=vt;J([a()],j.prototype,"src");J([d()],j.prototype,"movieLibraryGridItems");J([d()],j.prototype,"allMovies");J([d()],j.prototype,"currentGenre");var he=Object.defineProperty,K=(o,t,r,s)=>{for(var e=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=n(t,r,e)||e);return e&&he(t,r,e),e};const gt=class gt extends c{render(){return l`
        <article class="theaters-near-you-list-item">
            <h2><slot name="theater-name">${this.theaterName}</slot></h2>
            <h3>${this.theaterLocation}</h3>
            <a href="${this.theaterWebsite}"><slot name="theater-website">Visit My Site!</slot></a>
        </article>
    `}};gt.styles=[z.styles,m`
        .theaters-near-you-list-item {
            display: flex;
            flex-direction: column;
            padding: var(--padding-insider);
            width: 450px;
            height: auto;
            border-radius: var(--border-radius-content);
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            transition: transform 0.3s ease;
        }
        
        .theaters-near-you-list-item:hover {
            transform: scale(1.03);
        }

        .theaters-near-you-list-item h2 {
            margin-bottom: 5px;
            color: var(--color-main-support);
            font-family: var(--main-font-family);
            font-weight: var(--main-font-weight);
            font-style: var(--main-font-type);
            font-size: var(--h2-font-size);
        }

        .theaters-near-you-list-item h3 {
            margin-top: 5px;
            color: var(--color-main-support);
            font-family: var(--main-font-family);
            font-weight: var(--main-font-weight);
            font-style: var(--main-font-type);
            font-size: var(--h3-font-size);
        }

        .theaters-near-you-list-item a {
            text-decoration: none;
            color: var(--color-main-support);
            font-family: var(--sub-font-family);
            font-weight: var(--main-font-weight);
            font-style: var(--main-font-type);
            font-size: var(--p-font-size);
        }
    `];let _=gt;K([a({attribute:"theater-name"})],_.prototype,"theaterName");K([a()],_.prototype,"theaterLocation");K([a()],_.prototype,"theaterDistance");K([a({attribute:"theater-website"})],_.prototype,"theaterWebsite");var de=Object.defineProperty,_t=(o,t,r,s)=>{for(var e=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=n(t,r,e)||e);return e&&de(t,r,e),e};const bt=class bt extends c{constructor(){super(...arguments),this.theatersNearYouItems=[]}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(t){fetch(t).then(r=>r.json()).then(r=>{if(r){const s=r;this.theatersNearYouItems=s.theatersNearYouItems}})}renderTheatersNearYouItem(t){return l`
      <theaters-near-you-list-item
        theater-name="${t.theaterName}"
        theaterLocation="${t.theaterLocation}"
        theaterWebsite="${t.theaterWebsite}"
      >
      </theaters-near-you-list-item>
    `}render(){return l`
      <div class="theaters-near-you-list">
        ${this.theatersNearYouItems.map(t=>this.renderTheatersNearYouItem(t))}
      </div>
    `}};bt.styles=m`
    .theaters-near-you-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, 450px);
      justify-content: center;
      gap: 1rem;
    }
  `;let I=bt;_t([a()],I.prototype,"src");_t([d()],I.prototype,"theatersNearYouItems");var fe=Object.defineProperty,W=(o,t,r,s)=>{for(var e=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=n(t,r,e)||e);return e&&fe(t,r,e),e};const yt=class yt extends c{constructor(){super(...arguments),this.moviePaths=[]}render(){return l`
      <section class="theater-list-item">
        <h2><slot name="theater-name">${this.theaterName}</slot></h2>
        <h3><slot name="theater-info">${this.theaterInfo}</slot></h3>
        <a href="/movie-night/movies-out-now"><h3><slot name="see-movies-everywhere">SEE MOVIES EVERYWHERE</slot></h3></a>

        <div class="theaters-gallery">
          ${this.moviePaths.map(t=>l`
              <a href="/movie-night/theaters/${t.movieName}"><slot name="img-src"><img src="${t.imgSrc}" alt="${t.movieName}" /></slot></a>
            `)}
        </div>
      </section>
    `}};yt.styles=[z.styles,m`
      .theater-list-item {
        margin-top: 25px;
        padding: var(--padding-insider);
        width: auto;
        height: auto;
        border-radius: var(--border-radius-content);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        transition: transform 0.3s ease;
      }

      .theater-list-item:hover {
        transform: scale(1.03);
      }

      .theater-list-item h2 {
        color: var(--color-main-support);
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h2-font-size);
      }

      .theater-list-item h3 {
        color: var(--color-main-support);
        font-family: var(--main-alternative-font-family);
        font-weight: var(--main-alternative-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h3-font-size);
      }

      .theaters-gallery {
        display: flex;
        justify-content: start;
        gap: 1rem;
        width: auto;
        height: auto;
      }

      .theaters-gallery img {
        width: var(--width-theater-imgs);
        height: var(--height-theater-imgs);
        object-fit: cover;
      }
    `];let $=yt;W([a({attribute:"theater-name"})],$.prototype,"theaterName");W([a({attribute:"theater-info"})],$.prototype,"theaterInfo");W([a({type:Array})],$.prototype,"moviePaths");W([a({attribute:"img-src"})],$.prototype,"imgSrc");W([a()],$.prototype,"movieName");var ue=Object.defineProperty,Ct=(o,t,r,s)=>{for(var e=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=n(t,r,e)||e);return e&&ue(t,r,e),e};const wt=class wt extends c{constructor(){super(...arguments),this.theatersListItems=[]}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(t){fetch(t).then(r=>r.json()).then(r=>{this.theatersListItems=r}).catch(console.error)}renderTheatersListItem(t){return l`
      <theaters-list-item
        theater-name="${t.theaterName}"
        theater-info="${t.theaterInfo}"
        .moviePaths="${t.moviePaths}"
      >
      </theaters-list-item>
    `}render(){return l`
      <div class="theaters-list">
        ${this.theatersListItems.map(t=>this.renderTheatersListItem(t))}
      </div>
    `}};wt.styles=m`
    .theaters-list {
      background-color: var(--color-main-background);
      margin: var(--margin-for-body);
    }
  `;let A=wt;Ct([a()],A.prototype,"src");Ct([d()],A.prototype,"theatersListItems");var pe=Object.defineProperty,E=(o,t,r,s)=>{for(var e=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=n(t,r,e)||e);return e&&pe(t,r,e),e};const xt=class xt extends c{constructor(){super(...arguments),this.movieTimes=[]}render(){return l`
      <section class="theater-item">
        <h2><slot name="theater-name">${this.theaterName}</slot></h2>
        <h3>${this.theaterLocation} | ${this.distanceFromYou}</h3>

        <div class="showing-times">
          ${this.movieTimes.map(t=>l`
              <button>
                <slot name="movie-time">${t.movieTime}</slot>
              </button>
            `)}
        </div>
      </section>
    `}};xt.styles=[z.styles,m`
      .theater-item {
        margin-top: 25px;
        padding: var(--padding-insider);
        width: auto;
        height: auto;
        border-radius: var(--border-radius-content);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        transition: transform 0.3s ease;
      }
        
      .theater-item:hover {
        transform: scale(1.03);
      }

      .theater-item h2 {
        color: var(--color-main-support);
        font-family: var(--main-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h2-font-size);
      }

      .theater-item h3 {
        color: var(--color-main-support);
        font-family: var(--main-alternative-font-family);
        font-weight: var(--main-alternative-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h3-font-size);
      }

      .showing-times {
        display: flex;
        flex-direction: row;
        gap: 1rem;
      }

      .showing-times button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-sub-background);
        color: var(--color-button-text);
        text-align: center;
        text-decoration: none;
        width: 100px;
        height: 30px;
        font-family: var(--sub-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--p-font-size);
        border: var(--border-thickness-content) solid
          var(--color-sub-background);
        border-radius: var(--border-radius-content);
        cursor: pointer;
        transition: transform 0.3s ease;
      }

      .showing-times button:hover {
        background-color: var(--color-button-text);
        color: var(--color-sub-background);
        text-decoration: underline;
        transform: scale(1.03);
      }
    `];let k=xt;E([a({attribute:"theater-name"})],k.prototype,"theaterName");E([a({attribute:"theater-location"})],k.prototype,"theaterLocation");E([a({attribute:"distance-from-you"})],k.prototype,"distanceFromYou");E([a({type:Array})],k.prototype,"movieTimes");E([a({attribute:"movie-time"})],k.prototype,"movieTime");var ve=Object.defineProperty,Tt=(o,t,r,s)=>{for(var e=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=n(t,r,e)||e);return e&&ve(t,r,e),e};class tt extends c{constructor(){super(...arguments),this.theaterSubItems=[]}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(t){fetch(t).then(r=>r.json()).then(r=>{if(r){const s=r;this.theaterSubItems=s.theaterSubItems}})}renderTheaterSubItem(t){return l`
      <theater-subitem
        theater-name="${t.theaterName}"
        theater-location="${t.theaterLocation}"
        distance-from-you="${t.distanceFromYou}"
        .movieTimes="${t.movieTimes}"
      >
      </theater-subitem>
    `}render(){return l`
      <div class="theater-subitem-list">
        ${this.theaterSubItems.map(t=>this.renderTheaterSubItem(t))}
      </div>
    `}}Tt([a()],tt.prototype,"src");Tt([d()],tt.prototype,"theaterSubItems");var ge=Object.defineProperty,et=(o,t,r,s)=>{for(var e=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=n(t,r,e)||e);return e&&ge(t,r,e),e};const $t=class $t extends c{render(){return l`
      <article class="soundtrack-library-grid-item">
          <article class="soundtrack-library-grid-item-img">
              <slot name="img-src"><img src="${this.imgSrc}" alt="${this.soundtrackName}"></slot>
          </article>

          <article class="soundtrack-library-grid-item-text">
              <p><slot name="soundtrack-name">${this.soundtrackName}</slot></p>
              <p id="runtime"><slot name="duration">${this.runtime}</slot></p>
              <a href="/movie-night/music-library/${this.soundtrackName}"><button><slot name="soundtrack-songs">Listen to Full Playlist</slot></button></a>
          </article>
      </article>
    `}};$t.styles=[z.styles,m`
      .soundtrack-library-grid-item {
        display: flex;
        padding: var(--padding-insider);
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: auto;
        background-color: var(--color-main-background);
        border-radius: var(--border-radius-content);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        transition: transform 0.3s ease;
      }

      .soundtrack-library-grid-item:hover {
        transform: scale(1.03);
      }

      .soundtrack-library-grid-item-text {
        width: 200px;
      }

      #runtime {
        color: var(--color-main-support);
        font-family: var(--sub-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--p-font-size-smaller);
      }

      .soundtrack-library-grid-item-text button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-sub-background);
        color: var(--color-button-text);
        text-align: center;
        text-decoration: none;
        width: 200px;
        height: 30px;
        font-family: var(--sub-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--p-font-size);
        border: var(--border-thickness-content) solid
        var(--color-sub-background);
        border-radius: var(--border-radius-content);
        cursor: pointer;
        transition: transform 0.3s ease;
      }

      .soundtrack-library-grid-item-text button:hover {
        background-color: var(--color-button-text);
        color: var(--color-sub-background);
        text-decoration: underline;
        transform: scale(1.03);
      }

      .soundtrack-library-grid-item-img img {
        width: 200px;
        height: 191px;
        object-fit: cover;
      }

      .soundtrack-library-grid-item-text p {
        color: var(--color-main-support);
        font-family: var(--sub-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h3-font-size);
      }
    `];let C=$t;et([a({attribute:"img-src"})],C.prototype,"imgSrc");et([a({attribute:"soundtrack-name"})],C.prototype,"soundtrackName");et([a()],C.prototype,"runtime");var be=Object.defineProperty,Ot=(o,t,r,s)=>{for(var e=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=n(t,r,e)||e);return e&&be(t,r,e),e};const kt=class kt extends c{constructor(){super(...arguments),this.soundtrackGridItems=[]}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(t){fetch(t).then(r=>r.json()).then(r=>{this.soundtrackGridItems=r}).catch(console.error)}renderSoundtrackLibraryGridItem(t){return l`
      <soundtrack-library-grid-item
        img-src="${t.imgSrc}"
        soundtrack-name="${t.soundtrackName}"
        runtime="${t.runtime}"
      >
      </soundtrack-library-grid-item>
    `}render(){return l`
      <div class="soundtrack-library-grid">
        ${this.soundtrackGridItems.map(t=>this.renderSoundtrackLibraryGridItem(t))}
      </div>
    `}};kt.styles=m`
    .soundtrack-library-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, 250px);
      justify-content: center;
      gap: 2rem;
      padding: var(--padding-body);
    }
  `;let L=kt;Ot([a()],L.prototype,"src");Ot([d()],L.prototype,"soundtrackGridItems");var ye=Object.defineProperty,rt=(o,t,r,s)=>{for(var e=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=n(t,r,e)||e);return e&&ye(t,r,e),e};const zt=class zt extends c{render(){return l`
      <article class="artifact-library-grid-item">
        <article class="artifact-library-grid-item-img">
          <slot name="img-src"
            ><img src="${this.imgSrc}" alt="${this.artifactName}"
          /></slot>
        </article>

        <article class="artifact-library-grid-item-text">
          <p><slot name="artifact-name">${this.artifactName}</slot></p>
          <p id="artifact-description">
            <slot name="artifact-description">${this.artifactDescription}</slot>
          </p>
        </article>
      </article>
    `}};zt.styles=[m`
      .artifact-library-grid-item {
        display: flex;
        padding: var(--padding-insider);
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: auto;
        background-color: var(--color-main-background);
        border-radius: var(--border-radius-content);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        box-sizing: border-box;
        transition: transform 0.3s ease;
      }

      .artifact-library-grid-item:hover {
        transform: scale(1.03);
      }

      .artifact-library-grid-item-text {
        width: 200px;
      }

      #artifact-description {
        color: var(--color-main-support);
        font-family: var(--sub-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--p-font-size-smaller);
      }

      .artifact-library-grid-item-img img {
        width: 200px;
        height: 191px;
        object-fit: cover;
      }

      .artifact-library-grid-item-text p {
        color: var(--color-main-support);
        font-family: var(--sub-font-family);
        font-weight: var(--main-font-weight);
        font-style: var(--main-font-type);
        font-size: var(--h3-font-size);
      }
    `];let T=zt;rt([a({attribute:"img-src"})],T.prototype,"imgSrc");rt([a({attribute:"artifact-name"})],T.prototype,"artifactName");rt([a({attribute:"artifact-description"})],T.prototype,"artifactDescription");var we=Object.defineProperty,Bt=(o,t,r,s)=>{for(var e=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=n(t,r,e)||e);return e&&we(t,r,e),e};const Nt=class Nt extends c{constructor(){super(...arguments),this.artifactGridItems=[]}connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}hydrate(t){fetch(t).then(r=>r.json()).then(r=>{this.artifactGridItems=r}).catch(console.error)}renderArtifactLibraryGridItem(t){return l`
      <artifact-library-grid-item
        img-src="${t.imgSrc}"
        artifact-name="${t.artifactName}"
        artifact-description="${t.artifactDescription}"
      >
      </artifact-library-grid-item>
    `}render(){return l`
      <div class="artifact-library-grid">
        ${this.artifactGridItems.map(t=>this.renderArtifactLibraryGridItem(t))}
      </div>
    `}};Nt.styles=m`
    .artifact-library-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, 250px);
      gap: 2rem;
      padding: var(--padding-body);
      justify-content: center;
    }
  `;let Y=Nt;Bt([a()],Y.prototype,"src");Bt([d()],Y.prototype,"artifactGridItems");const xe=[{path:"/movie-night/famous-film-artifacts",view:()=>l` <artifacts-view></artifacts-view> `},{path:"/movie-night/music-library/:soundtrackName",view:o=>l`
      <music-library-item-view
        soundtrackName="${o.soundtrackName}"
        src="/functions/soundtrack-item-data.json"
      ></music-library-item-view>
    `},{path:"/movie-night/music-library",view:()=>l` <music-library-view></music-library-view> `},{path:"/movie-night/theaters/:movieName",view:o=>l`
      <theaters-item-view
        movieName="${o.movieName}"
        src="/functions/theaters-item-data.json"
      ></theaters-item-view>
    `},{path:"/movie-night/theaters",view:()=>l` <theaters-view></theaters-view> `},{path:"/movie-night/movie-library/:movieName",view:o=>l`
      <movie-library-item-view
        movieName="${o.movieName}"
        src="/functions/movie-library-item-data.json"
      ></movie-library-item-view>
    `},{path:"/movie-night/movie-library",view:()=>l` <movie-library-view></movie-library-view> `},{path:"/movie-night/movies-out-now/:outNowName",view:o=>l`
      <movies-out-now-item-view
        outNowName="${o.outNowName}"
        src="/functions/movies-out-now-item-data.json"
      ></movies-out-now-item-view>
    `},{path:"/movie-night/movies-out-now",view:()=>l` <movies-out-now-view></movies-out-now-view> `},{path:"/movie-night/user-profile/:username/edit",view:o=>l`
      <profile-view username="${o.username}" mode="edit"></profile-view>
    `},{path:"/movie-night/user-profile/:username",view:o=>l`
      <profile-view username="${o.username}" mode="view"></profile-view>
    `},{path:"/movie-night/user-profile",view:()=>l` <profile-view></profile-view> `},{path:"/movie-night",view:()=>l` <home-view></home-view> `},{path:"/",redirect:"/movie-night"}];qt({"mu-auth":Q.Provider,"mu-history":U.Provider,"mu-switch":class extends Dt.Element{constructor(){super(xe,"Blazing:history","Blazing:auth")}},"mu-store":class extends Mt.Provider{constructor(){super(Rt,Ft,"Blazing:auth")}},"movie-header":B,"home-view":V,"profile-view":g,"movies-out-now-view":Vt,"movies-out-now-item-view":b,"movie-library-view":X,"movie-library-item-view":h,"theaters-view":Zt,"theaters-item-view":y,"music-library-view":ee,"music-library-item-view":f,"artifacts-view":ie,"horizontal-slider":p,"movies-out-now-grid-item":w,"movies-out-now-grid":G,"theaters-subitem":x,"theaters-subitem-list":Z,"movie-library-grid-item":S,"movie-library-grid":j,"theaters-near-you-list-item":_,"theaters-near-you-list":I,"theaters-list-item":$,"theaters-list":A,"theater-subitem":k,"theater-subitem-list":tt,"soundtrack-library-grid-item":C,"soundtrack-library-grid":L,"artifact-library-grid-item":T,"artifact-library-grid":Y});
