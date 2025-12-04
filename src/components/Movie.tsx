import { useContext, useState } from "react";
import type { IMovie } from "../interfaces/movie";
import CounterContext from '../contexts/CounterProvider';
import WatchlistContext from "../contexts/WatchlistProvider";

    interface IMovieComponent{
        movieData : IMovie
    }

    const Movie = ({movieData }: IMovieComponent) => {
        const {counter, counterIncrement} = useContext(CounterContext)
        const {addMovieToWatchlist} = useContext(WatchlistContext)
        // const [counter, setCounter] = useState<number>(0)
        const [isChosen, setIsChosen] = useState<boolean>(false)

        const handleClick = () => {
            setIsChosen(true)
            counterIncrement()
            // setCounter(counter+1)
        }

        const chooseMovie = () => {
            setIsChosen(true)
            addMovieToWatchlist(movieData)
        }
        
    return(
        <div className="card bg-base-100 w-50 shadow-sm">
            <figure>
            <img className="rounded-2xl h-60 p-2 pb-0" 
                src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                alt="Une bataille après l'autre" />
            </figure>
            <div className="card-body">
            <h2 className="card-title justify-center">
                {movieData.title}
            </h2>
            <p>{movieData.overview.slice(0, 40)}[...]</p>
            <div className="card-actions justify-center">
                <button onClick={() => handleClick()} className="btn bg-indigo-500 text-white ">Like {isChosen? counter : 0}</button>
                <button onClick={() => chooseMovie()} className="btn bg-indigo-500 text-white">{isChosen ? 'Added to watchlist' : 'Add to watchlist'}</button>
            </div>
            </div>
        </div>
    
    )

}
export default Movie;