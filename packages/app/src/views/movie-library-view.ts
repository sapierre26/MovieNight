import { html, LitElement } from "lit";

export class MovieLibraryViewElement extends LitElement {
    render() {
        return html`
            <div class="sub-nav-bar">
                <div class="sub-nav-bar-content">
                    <p>FILTER BY GENRE</p>

                    <div class="sub-nav-bar-links">
                        <a href="#3d">3D</a>
                        <a href="#action">Action</a>
                        <a href="#animated">Animated</a>
                        <a href="#classic">Classic</a>
                        <a href="#comedy">Comedy</a>
                        <a href="#dance">Dance</a>
                        <a href="#documentaries">Documentaries</a>
                        <a href="#drama">Drama</a>
                        <a href="#film-tv-radio">Film, Tv, Radio</a>
                        <a href="#foreign">Foreign</a>
                        <a href="#historical-film">Historical Film</a>
                        <a href="#horror">Horror</a>
                        <a href="#imax">IMAX</a>
                        <a href="#indie">Indie</a>          
                        <a href="#kids">Kids</a>
                        <a href="#music-peforming-arts">Peformance Arts</a>
                        <a href="#romance">Romance</a>
                        <a href="#sci-fi">Sci-Fi</a>
                        <a href="#special-events">Special Events</a>
                        <a href="#spy-film">Spy Film</a>
                        <a href="#suspense">Suspense</a>
                        <a href="#war">War</a>
                        <a href="#western">Western</a>
                    </div>
                </div>

            </div>

            <movie-library-grid src="/functions/movie-library-data.json"></movie-library-grid>
        `
    }
}