// import { useFetchMovie } from "hooks/UseFetchMovie/UseFetchMovie"

import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { fetchMovieById } from "services/moviesApi";
// import { Cast } from "components/Cast/Cast";

export const MovieSubPage = () => {
    const [movie, setMovie] = useState (null);
    const { movieId } = useParams();
    const location = useLocation();

    useEffect (() => {
        fetchMovieById(movieId)
            .then(setMovie);
    }, [movieId]);

    return (
        <>
            {movie && (
                <>
                    <h2>{movie.title}</h2>
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                    <p>Additional information</p>

                    <Link to='/cast' state={{from: location}}>Cast</Link>
                </>
            )}
            
        </>
    )
}



// export const MovieSubPage = () => {
//     const movie = useFetchMovie();
//     console.log(movie);
//     return (
//         <>
//             {movie && (
//                 <>
//                     <h2>{movie.title}</h2>
//                     <img src={movie.poster_path}  alt={movie.title} />
//                 </>
//             )}
            
//         </>
//     )
// }