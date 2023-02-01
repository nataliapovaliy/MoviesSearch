import { useEffect, useState } from "react";
import { fetchMoviesTrend } from "services/moviesApi";
import { Link, Outlet } from "react-router-dom";

export const HomePage = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect (() => {
        fetchMoviesTrend()
            .then(setMovies);
    }, [])

    return (
        <>
        <ul>
            {movies.map(({ title, id }) => (
                <li key={id}>
                    <Link to={`movies/${id}`}>{title}</Link>
                </li>
            ))}
        </ul>
        <Outlet />
        </>
    )
}