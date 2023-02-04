import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { fetchMovieCast } from "services/moviesApi";
import { ListCasts, Img } from './Cast.styled';
import  defaultfoto from 'img/defaultfoto.jpg';

const Cast = () => {
    const [casts, setCasts] = useState(null);
    const {movieId} = useParams();
    
    useEffect (() => {
        fetchMovieCast(movieId)
            .then(data => {
                // console.log('casts >>>>', data);
                setCasts(data);
            });
                
    }, [movieId]);

    return (
        <>
            {(casts && casts.length > 0) ? (
                <>
                    <ListCasts>
                        {casts.map(({id, profile_path, original_name, character }) => (
                        <li key={id}>
                            <Img src={profile_path ? `https://image.tmdb.org/t/p/w200${profile_path}` : defaultfoto} alt={original_name} />
                            <p>{original_name}</p>
                            <p>{character}</p>
                        </li>
                        ) )}
                    </ListCasts>
                </>
            ) : (<p>We don't have any casts for this movie.</p>)}
        </>
    )
}

export default Cast
