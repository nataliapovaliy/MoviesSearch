import { useEffect, useState } from "react";
import { fetchMoviesTrend } from "services/moviesApi";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomePage = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        fetchMoviesTrend()
            .then(setMovies);
    }, []);

    const ContainerHome = styled.div`
        margin-left: 20px;
    `;
    
    return (
        <>
            <ContainerHome>
                <h2>Trending today</h2>
                <ul>
                    {movies.map(({ title, id }) => (
                        <li key={id}>
                            <Link to={`movies/${id}`}>{title}</Link>
                        </li>
                    ))}
                </ul>
            </ContainerHome>
        </>
    );
}