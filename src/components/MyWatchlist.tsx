import { useContext } from "react"
import WatchlistContext from "../contexts/WatchlistProvider"
import type { IMovie } from "../interfaces/movie"
import { IoIosCloseCircleOutline } from "react-icons/io"

const MyWatchlist = () => {
const {watchlist, removeMovieFromWatchlist} = useContext(WatchlistContext)

    return (
        <div>
            <div className="dropdown dropdown-end">
                <button className="text-white">MyWatchlist : {watchlist.length} ⬇️ </button>
                    <ul className="dropdown-content menu bg-indigo-500 rounded-box w-70 md:w-86 shadow-sm">
                        {watchlist.map((movie: IMovie) => (
                            <li key={movie.id} className="flex flex-col">
                                <div className="card text-primary-content w-66 md:w-82">
                                <div className="card-body">
                                    <h2 className="card-title">{movie.title}</h2>
                                        <p>Release : {movie.release_date}</p>
                                        <p>{movie.overview}</p>
                                    <div className="card-actions justify-end">
                                    <button className="text-white w-5 absolute top-2 right-2" onClick={() => removeMovieFromWatchlist(movie.id)}> <IoIosCloseCircleOutline /> </button>
                                    </div>
                                </div>
                                </div>
                            </li>
                        ))}
                    </ul>
            </div>
        </div>
        
    )
}

export default MyWatchlist