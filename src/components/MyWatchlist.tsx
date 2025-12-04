import { useContext } from "react"
import WatchlistContext from "../contexts/WatchlistProvider"
import type { IMovie } from "../interfaces/movie"

const MyWatchlist = () => {
const {watchlist, removeMovieFromWatchlist} = useContext(WatchlistContext)

    return (
        <div>
            <div className="dropdown dropdown-start">
                <button className="pl-2 m-5 text-white">MyWatchlist : {watchlist.length} ⬇️ </button>
                    <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-45 p-2 shadow-sm">
                        {watchlist.map((movie: IMovie) => (
                            <li key={movie.id}>
                            {movie.title}
                            <button className="text-white " onClick={() => removeMovieFromWatchlist(movie.id)}>X</button>
                            </li>
                        ))}
                    </ul>
            </div>
        </div>
        
    )
}

export default MyWatchlist