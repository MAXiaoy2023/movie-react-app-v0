import { useContext, useState } from "react";
import type { IMovie } from "../interfaces/movie";
// import CounterContext from '../contexts/CounterProvider';
import WatchlistContext from "../contexts/WatchlistProvider";
import { BiLike } from "react-icons/bi";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router";

    interface IMovieComponent{
        movieData : IMovie
    }

    const Movie = ({movieData }: IMovieComponent) => {
        //const {counter, counterIncrement} = useContext(CounterContext)
        const {addMovieToWatchlist} = useContext(WatchlistContext)
        const [counter, setCounter] = useState<number>(0)
        const [isChosen, setIsChosen] = useState<boolean>(false)

        const handleClick = () => {
            setIsChosen(true)
            //counterIncrement()
            setCounter(counter + 1)  
        }

        const chooseMovie = () => {
            setIsChosen(true)
            addMovieToWatchlist(movieData)
        }

        const url = `/movies/${movieData.id}`
        
        return (
            <>
            <div className="card bg-base-100 w-50 h-full shadow-sm group cursor-pointer relative">
                <div className="card-actions absolute z-10 top-2 right-2 flex">
                    <button onClick={() => chooseMovie()} className=" bg-indigo-500 text-white">{isChosen ? <MdOutlineFavorite size={18}  /> : <MdOutlineFavoriteBorder size={18}  />}</button>
                </div>
                <Link to={url}>
                <div>
                    <img className="rounded-2xl p-2 objectiv-cover"
                    src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                    alt={movieData.title} />
                </div>
                <div className="card-body flex items-center justify-end absolute inset-0 pb-0">
                    <div className="bg-linear-to-b from from-white to-white/80 p-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-full group-hover:translate-y-0">
                        <h2 className="card-title">{movieData.title}</h2>
                        <p>{movieData.overview.slice(0, 40)}[...]</p>
                    </div>
                </div>
                    </Link>
                <div className="absolute bottom-2 right-2">
                    <button onClick={() => handleClick()} className=" bg-indigo-500 text-white"><BiLike size={18} /> {isChosen? counter : 0}</button>
                </div>
            </div>
        </>
    
    )

}
export default Movie;