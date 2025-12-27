import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
// import reset from "/styles/reset.css.ts";

export class MusicLibraryItemViewElement extends LitElement {
    @property()
    src?: string;

    @property()
    soundtrackName!: string;

    @property()
    releaseYear?: string;

    @property()
    runtime?: string;

    @property()
    soundtracks: Array<{ imgSrc: string; songName: string; songLength: string; credits: string; href: string; }> = [];

    @property({ attribute: "img-src" })
    imgSrc?: string;

    @property({ attribute: "song-name" })
    songName?: string;

    @property({ attribute: "song-length" })
    songLength?: string;

    @property({ attribute: "credits" })
    credits?: string;

    @property()
    href?: string;

    connectedCallback() {
        super.connectedCallback();
        if (this.src) this.getPlaylistDetails(this.src);
    } 

    getPlaylistDetails(src: string) {
        fetch(src)
        .then((res) => res.json())
        .then((json: object) => {
            if (json) {
                const playlist = (json as any[]).find((item) => item.soundtrackName === this.soundtrackName);
                if (playlist) {
                    this.soundtrackName = playlist.soundtrackName;
                    this.releaseYear = playlist.releaseYear;
                    this.runtime = playlist.runtime;
                    this.soundtracks = playlist.soundtracks;
                }
            }
        });
    }

    render() {
        return html`
            <div class="playlist-bio">
                <section class="playlist-heading">
                    <h1>${this.soundtrackName}</h1>
                    <h2>${this.releaseYear} | ${this.runtime}</h2>
                </section>

                <div class="playlist-list">
                    ${this.soundtracks.map(
                        (soundtrack) => html`
                            <article class="playlist-item">
                                <article class="playlist-item-img">
                                    <slot name="img-src"><img src="${soundtrack.imgSrc}" alt="${soundtrack.songName}"></slot>
                                </article>

                                <article class="playlist-text">
                                    <h2><slot name="song-name">${soundtrack.songName}</slot></h2>
                                    <h3><slot name="song-length">${soundtrack.songLength}</slot></h3>

                                    <p><slot name="credits">Credits: ${soundtrack.credits}</slot></p>
                                    <a href="${soundtrack.href}"><svg class="icon" id="play-button"><use href="/icons/movie-night.svg#icon-play-button" /></svg></a>
                                </article>
                            </article>
                        `
                    )}
                </div>
                // <playlist-list src="/functions/playlist-data.json"></playlist-list>
            </div>
        `;
    }

    static styles = [
        // reset.styles,
        css`
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
        `
    ]
}
