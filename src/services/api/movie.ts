import axios from "axios";

const options = {
    url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    headers: {
        accept: "application/json",
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGIwYjgzZjU0YmM5YzlhZTNkMjUxYjYwMDIxYTQ4MSIsIm5iZiI6MTc2MzU2NDI4Ny45NzcsInN1YiI6IjY5MWRkYWZmNzE0NThjYTJiNWMyYWEyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0QP6GJ1zfZ0J3JoePOJ9MVaKb85rTOzj4c3HM2P_8Io",
    },
};

export const getMovies = async () => {
    try{
        const moviesFromAxios = await axios.get(options.url, options)
        return moviesFromAxios.data.results;
    } catch (error){
        console.log(error);
    }
};