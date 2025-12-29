import { useEffect, useState } from "react";
import type { IMovie } from "../interfaces/movie";
import Slider from "react-slick";
import Movie from "../components/Movie";
import { getMovies, getPopularMovies } from "../services/api/movie";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Movies = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [popularMovies, setPopularMovies] = useState<IMovie[]>([]);
    
    useEffect(() => {
        //use axios
    const getDataFromDB = async() => {
        const moviesFromDB = await getMovies()
        setMovies(moviesFromDB)           
    }
        getDataFromDB()

    }, []); 

    useEffect(() => {
        //use axios
    const getPopularmoviesFromDB = async() => {
        const popularMoviesFromDB = await getPopularMovies()
        setPopularMovies(popularMoviesFromDB)           
    }
        getPopularmoviesFromDB()

    }, []); 
    
    const settings = {
        dots: false, // afficher les points de navigation
        infinite: true, // boucle infinie
        speed: 500, // vitesse de transition
        slidesToShow: 5, // nombre de cartes visibles
        slidesToScroll: 5, // nombre de cartes à faire défiler
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
            },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    };

    return (
    <>
        <div className="bg-base-300 rounded-xl pt-5">
            <div className="ml-6">
            <h2>The top rated movies</h2>
            </div>
            <div className="slider-container mx-auto p-4 ">
                <Slider {...settings}>
                {movies && movies.map((movie: IMovie) => (
                    <div key={movie.id} className="p-2">
                    <Movie movieData={movie} />
                    </div>
                ))}
                </Slider>
            </div>   
            </div>
            
        <div className="bg-base-300 rounded-xl pt-5">
            <div className="ml-6">
            <h2>The popular movies</h2>
            </div>
            <div className="slider-container mx-auto p-4 ">
                <Slider {...settings}>
                {popularMovies && popularMovies.map((popularMovie: IMovie) => (
                    <div key={popularMovie.id} className="p-2">
                    <Movie movieData={popularMovie} />
                    </div>
                ))}
                </Slider>
            </div>   
        </div>

    </>
    );
}

export default Movies