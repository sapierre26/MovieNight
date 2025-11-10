export interface TheatersSubItem {
    theaterName: string;
    theaterLocation: string;
    distanceFromYou: string;
    movieTimes: Array<{ movieTime: string }>;
    movieTime: string;
}