// import { useFetchMovie } from "hooks/UseFetchMovie/UseFetchMovie"

import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { fetchMovieById } from "services/moviesApi";
import styled from "styled-components";


export const MovieDetails = () => {
    const navigate = useNavigate();
    const [movie, setMovie] = useState (null);
    const { movieId } = useParams();

    useEffect (() => {
        fetchMovieById(movieId)
            .then(setMovie);
    }, [movieId]);

    const ButtonGoBack = styled.button`
        margin: 20px;
    `
    const Container = styled.div`
        margin-left: 20px;
        display: flex;
        flex-direction: row;
        gap: 20px;
    `
    const ListDetails = styled.div`
        display: flex;
        flex-direction: column;
    `
    const OverviewTitle = styled.h3`
        font-size: large;
    `
    const OverviewParagraf = styled.p`
        max-width: 500px;
    `

    const GenresTitle = styled.p`
        font-weight: 700;
    `
    const GenresDiv = styled.div`
        display: flex;
        flex-direction: column;
        
    `
    const GenresList = styled.div`
        display: flex;
        flex-direction: row;
        gap: 10px;
    `
    const DivDetails = styled.div`
        margin-left: 20px;
    `

    return (
        <>
            {movie && (
                <>
                    <ButtonGoBack onClick={()=>navigate('/')}>Go back</ButtonGoBack>
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