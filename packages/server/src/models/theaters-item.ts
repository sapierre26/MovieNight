export interface TheatersListItem {
  theaterName: string;
  theaterInfo: string;
  moviePaths: Array<{ imgSrc: string; movieName: string }>;
  imgSrc: string;
  href: string;
  movieName: string;
}