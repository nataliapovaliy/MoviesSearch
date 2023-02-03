import { useEffect, useState } from "react";
import { fetchMoviesTrend } from "services/moviesApi";
import { Link } from "react-router-dom";
import { ContainerHome } from './HomePage.styled';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        fetchMoviesTrend()
            .then(setMovies);
    }, []);

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

export default HomePage