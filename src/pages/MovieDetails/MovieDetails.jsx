import { useFetchMovie } from "hooks/UseFetchMovie/UseFetchMovie"
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { ButtonGoBack, Container, ListDetails, OverviewTitle, OverviewParagraf, GenresTitle, GenresDiv, GenresList, GenresItem, DivDetails } from './MovieDetalics.styled'
import defaultfoto from 'img/defaultfoto.jpg';

const MovieDetails = () => {
    const navigate = useNavigate();
    const movie = useFetchMovie();
    const location = useLocation();

    return (
        <>
            {movie && (
                <>
                    <ButtonGoBack onClick={() => navigate(location.state?.from ?? '/')}>Go back</ButtonGoBack>
                    <Container>
                        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : defaultfoto} alt={movie.title} />
                        <ListDetails>
                            <h2>{movie.title}</h2>
                            <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
                            <OverviewTitle>Overview</OverviewTitle>
                            <OverviewParagraf>{movie.overview}</OverviewParagraf>
                            <GenresDiv>
                                <GenresTitle>Genres</GenresTitle>
                                <GenresList>
                                    {movie.genres.map(({ name, id }) => (
                                        <GenresItem key={id}>
                                            <p>{name}</p>
                                        </GenresItem>
                                        )
                                    )}
                                </GenresList>
                            </GenresDiv>
                            
                        </ListDetails>
                    </Container>
                    <DivDetails>
                        <p>Additional information</p>
                        <ul>
                            <li>
                                <Link to='cast' state={{from:location.state.from}}>Cast</Link>
                            </li>
                            <li>
                                <Link to='reviews' state={{from:location.state.from}}>Reviews</Link>
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