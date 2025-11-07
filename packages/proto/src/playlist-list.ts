import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import "./playlist-item.js";

interface PlaylistItemData {
  imgSrc: string;
  songName: string;
  songLength: string;
  credits: string;
  href: string;
}

export class PlaylistElement extends LitElement {
  @property()
  src?: string;

  @state()
  playlistItems: Array<PlaylistItemData> = [];

  connectedCallback() {
    super.connectedCallback();
    if (this.src) this.hydrate(this.src);
  }

  hydrate(src: string) {
    fetch(src)
      .then((res) => res.json())
      .then((json: object) => {
        if (json) {
          // store the data as @state
          const playlist = json as {
            playlistItems: Array<PlaylistItemData>;
          };

          this.playlistItems = playlist.playlistItems;
        }
      });
  }

  renderPlaylistItem(gridItem: PlaylistItemData) {
    return html`
      <playlist-item
        img-src="${gridItem.imgSrc}"
        song-name="${gridItem.songName}"
        song-length="${gridItem.songLength}"
        credits="${gridItem.credits}"
        href="${gridItem.href}"
      >
      </playlist-item>
    `;
  }

  render() {
    return html`
      <div class="playlist-list">
        ${this.playlistItems.map((item) => this.renderPlaylistItem(item))}
      </div>
    `;
  }

  static styles = css`
    .playlist-list {
      margin-top: var(--margin-for-body);
    }
  `;
}
