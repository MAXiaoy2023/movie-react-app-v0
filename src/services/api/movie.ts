import axios from "axios";

const options = {
    headers: {
        accept: "application/json",
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGIwYjgzZjU0YmM5YzlhZTNkMjUxYjYwMDIxYTQ4MSIsIm5iZiI6MTc2MzU2NDI4Ny45NzcsInN1YiI6IjY5MWRkYWZmNzE0NThjYTJiNWMyYWEyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0QP6GJ1zfZ0J3JoePOJ9MVaKb85rTOzj4c3HM2P_8Io",
    },
};

export const getMovies = async () => {
    try{
        const moviesFromAxios = await axios.get("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options)
        return moviesFromAxios.data.results;
    } catch (error){
        console.log(error);
    }
};

export const getMovieById = async (id: number) => {
    const movieFromAxios = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, options)
    return movieFromAxios.data;
}

export const getPopularMovies = async () => {
    try{
        const popularMoviesFromAxios = await axios.get("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options)
        return popularMoviesFromAxios.data.results;
    } catch (error){
        console.log(error);
    }
};