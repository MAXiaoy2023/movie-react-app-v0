
// import { movies } from '../data/movies'
import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import type { IMovie } from '../interfaces/movie'
import { getMovies } from '../services/api/movie';

const Home = ()=> {
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        //use axios
    const getDataFromDB = async() => {
        const moviesFromDB = await getMovies()
        setMovies(moviesFromDB)           
    }
        getDataFromDB()
        
        // use l'API Fetch with a Promise
        
        //http request
        //loader(to do)
        //response from server
        //check response from server
        //console.log(data)
        //store data in state hook (useState)

        // const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

        // fetch(url,{
        //     headers: {
        //         accept: 'application/json',
        //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGIwYjgzZjU0YmM5YzlhZTNkMjUxYjYwMDIxYTQ4MSIsIm5iZiI6MTc2MzU2NDI4Ny45NzcsInN1YiI6IjY5MWRkYWZmNzE0NThjYTJiNWMyYWEyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0QP6GJ1zfZ0J3JoePOJ9MVaKb85rTOzj4c3HM2P_8Io'
        //     }
        // })
        
        // .then(response => {
        //     if (!response.ok) {
        //         throw new Error(`Erreur HTTP : ${response.status}`);
        //     }
        //     return response.json();
        // })
        // .then((data) => {
        //     console.log(data.results)
        //     setMovies(data.results)
        // })
        // .catch((error) => {
        //     console.error(`Impossible de récupérer les produits : ${error}`);
        // })
    }, []); // Pass an empty array as a dependency to execute the effect only once when the component loads.

    return (
        <>
        <div className='flex items-center justify-center flex-wrap gap-5 bg-indigo-400 rounded-xl p-5'>
            {
                movies && movies.map((movie: IMovie) => (      
                    <div key={movie.id}>
                            <Movie movieData={movie} />
                    </div>
            ))
            }
        </div>
        </>
        )
    }
    export default Home 