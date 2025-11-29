export interface MovieGoer {
  profileImg: string | undefined;
  userid: string | undefined;
  name: string;
  username: string | undefined;
  hometown: string;
  bio: string;
  favoriteMovies: Array<string>;
}