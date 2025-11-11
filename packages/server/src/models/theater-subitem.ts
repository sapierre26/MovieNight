export interface TheaterSubItem {
    theaterName: string;
    theaterLocation: string;
    distanceFromYou: string;
    movieTimes: Array<{ movieTime: string }>;
}