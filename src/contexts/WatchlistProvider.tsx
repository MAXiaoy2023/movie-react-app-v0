import { createContext, useState, type ReactNode } from "react"
import type { IMovie } from "../interfaces/movie"

interface IWatchlistContextType{
    watchlist: IMovie[]
    addMovieToWatchlist: (movie:IMovie) => void
    removeMovieFromWatchlist: (id:number) => void

}

interface IWatchlistProviderType{
    children : ReactNode
}

const WatchlistContext = createContext<IWatchlistContextType>({
    watchlist: [],
    addMovieToWatchlist: () => {},
    removeMovieFromWatchlist: () => {}
})

export const WatchlistProvider = ({ children }: IWatchlistProviderType) => {
    const [watchlist, setWatchlist] = useState<IMovie[]>([]);

    const addMovieToWatchlist = (movie: IMovie) => {
        if (!watchlist.some((item) => item.id === movie.id)) {
            setWatchlist([...watchlist, movie]);
            localStorage.setItem("watchlist", JSON.stringify([...watchlist, movie]));
        } else {
            alert("Already added!");
        }
    }

    const removeMovieFromWatchlist = (id:number) => {
        setWatchlist(watchlist.filter((item) => item.id !== id));
    }

    return (
        <WatchlistContext.Provider value={{ watchlist, addMovieToWatchlist, removeMovieFromWatchlist }}>
            {children} 
        </WatchlistContext.Provider> 
    )
}

export default WatchlistContext