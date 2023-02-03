// import { useFetchMovie } from "hooks/UseFetchMovie/UseFetchMovie"

import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams, useLocation } from "react-router-dom";
import { fetchMovieById } from "services/moviesApi";
import { ButtonGoBack, Container, ListDetails, OverviewTitle, OverviewParagraf, GenresTitle, GenresDiv, GenresList, DivDetails } from './MovieDetalics.styled'

const MovieDetails = () => {
    const navigate = useNavigate();
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
                    <ButtonGoBack onClick={() => navigate(location.state?.from ?? '/')}>Go back</ButtonGoBack>
                    <Container>
                        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                        <ListDetails>
                            <h2>{movie.title}</h2>
                            <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
                            <OverviewTitle>Overview</OverviewTitle>
                            <OverviewParagraf>{movie.overview}</OverviewParagraf>
                            <GenresDiv>
                                <GenresTitle>Genres</GenresTitle>
                                <GenresList>
                                    {movie.genres.map(({ name }) => <p>{name}</p>)}
                                </GenresList>
                            </GenresDiv>
                            
                        </ListDetails>
                    </Container>
                    <DivDetails>
                        <p>Additional information</p>
                        <ul>
                            <li>
                                <Link to='cast'>Cast</Link>
                            </li>
                            <li>
                                <Link to='reviews'>Reviews</Link>
                            </li>
                        </ul>
                    </DivDetails>    
                    <Outlet />
                </>
            )}
            
        </>
    )
}

export default MovieDetails


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