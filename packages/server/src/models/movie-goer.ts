export interface MovieGoer {
  profileImg: string;
  userid: string;
  name: string;
  username: string;
  hometown?: string;
  bio: string;
  favoriteMovies: Array<string>;
}