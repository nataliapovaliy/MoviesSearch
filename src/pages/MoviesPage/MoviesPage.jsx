import { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { fetchMovieSearch } from "services/moviesApi";

export const MoviesPage = () => {
    const [querySearchText, setQuerySearchText] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('searchText');

    useEffect(() => {
        if (query !== '' && query !== null)
        fetchMovieSearch(query)
            .then(setQuerySearchText);
    },[query])

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        setSearchParams({ searchText: form.elements.searchText.value })
        form.reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="searchText" />
                <button type="submit">Search</button>
            </form>

            <ul>
            {querySearchText.map(({ title, id }) => (
                <li key={id}>
                    <Link to={`${id}`}>{title}</Link>
                </li>
            ))}
        </ul>
        <Outlet />
    </>
    )

    
}