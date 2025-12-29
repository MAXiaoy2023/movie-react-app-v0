import { useEffect, useState } from "react";
import { getMovieById } from "../services/api/movie";
import type { IMovie } from "../interfaces/movie";
import { Link, useParams } from "react-router";

const MovieDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<IMovie | null>(null);

    useEffect(() => {
        const fetchMovie = async () => {
            if (id) {
                const fetchedMovie = await getMovieById(parseInt(id));
                setMovie(fetchedMovie);
                console.log(fetchedMovie)
            }
        };
        fetchMovie();
    }, [id]);

    if (!movie) {
        return <div>Chargement en cours...</div>
    }

    return (
        <>
            <div className="card lg:card-side bg-base-100 shadow-sm m-5" >
                <figure>
                    <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <div className="card-actions justify-end">
                    <Link to={'/'}>
                        <button className="btn btn-primary">Return to home</button>
                    </Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default MovieDetails