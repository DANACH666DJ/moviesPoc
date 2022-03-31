export interface Movie {
    id?: number;
    title?: string;
    poster?: number;
    genre?: Array<string>;
    year?: number;
    duration?: number;
    imdbRating?: number;
    actors?: Array<number>;
}