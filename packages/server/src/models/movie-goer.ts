export interface MovieGoer {
  userid: string;
  name: string;
  username: string | undefined;
  home: string;
  favoriteMovies: Array<string>;
  avatar: string | undefined;
  color: string | undefined;
}