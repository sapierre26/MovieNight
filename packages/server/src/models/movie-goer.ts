export interface MovieGoer {
  userid: string;
  name: string;
  username: string | undefined;
  home: string;
  favoriteMovies: Array<{ favMovie: string}>;
  avatar: string | undefined;
  color: string | undefined;
}