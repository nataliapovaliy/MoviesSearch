import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { fetchMovieCast } from "services/moviesApi";

export const Cast = () => {
    const [casts, setCasts] = useState(null);
    const {movieId} = useParams();

    useEffect (() => {
        fetchMovieCast(movieId)
            .then(data => {
                // console.log(data);
                setCasts(data);
            });
                
    }, [movieId]);

    return (
        <>
        {casts && (
            <ul>
                {casts.map(({id, profile_path, original_name, character }) => (
                <li key={id}>
                    <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={original_name} />
                    <p>{original_name}</p>
                    <p>{character}</p>
                </li>
            ) )}
            </ul>
        )}
        </>
    )
}


