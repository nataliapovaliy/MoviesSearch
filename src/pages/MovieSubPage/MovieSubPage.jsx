// import { useFetchMovie } from "hooks/UseFetchMovie/UseFetchMovie"

import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchMovieById } from "services/moviesApi";

export const MovieSubPage = () => {
    const [movie, setMovie] = useState (null);
    const { movieId } = useParams();

    useEffect (() => {
        fetchMovieById(movieId)
            .then(setMovie);
    }, [movieId]);

    return (
        <>
            {movie && (
                <>
                    <div>
                        <h2>{movie.title}</h2>
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                        <p>Additional information</p>
                        <ul>
                            <li>
                                <Link to='cast'>Cast</Link>
                            </li>
                            <li>
                                <Link to='reviews'>Reviews</Link>
                            </li>
                        </ul>
                        
                    <Outlet />
                    </div>
                    
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