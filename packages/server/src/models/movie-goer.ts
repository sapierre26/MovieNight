export interface MovieGoer {
  userid: string;
  name: string;
  username: string | undefined;
  hometown: string;
  bio: string;
  favoriteMovies: Array<string>;
}