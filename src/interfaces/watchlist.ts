import type { IMovie } from "./movie";

export interface IWatchlist{
        watchlist : IMovie[],
        removeMovie: (id: number) => void
    }