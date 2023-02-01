import { useEffect, useState } from "react";
import { fetchMoviesTrend } from "services/moviesApi";
import { Link } from "react-router-dom";

export const HomePage = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect (() => {
        fetchMoviesTrend()
            .then(setMovies);
    }, [])

    return movies.map(({title, id}) => (
        <li key={id}>
            <Link to={id}>{title}</Link>
        </li>
    ))
}