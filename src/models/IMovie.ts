// Setting the data types for the movie objects
export interface IMovie {
    id: number;
    title: string;
    year: number;
    runtime: number;
    director: string;
    plot: string;
    actors?: string[];
    poster?: string;
    rating: IRating;
}
export interface IRating {
    id: number;
    source: string;
    score: string;
}

export type WatchList = "listed" | "unlisted";