import { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { fetchMovieSearch } from "services/moviesApi";
import { FormInput, Input, ButtonSearch } from './MoviesPage.styled';

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
            <FormInput onSubmit={handleSubmit}>
                <Input type="text" name="searchText" />
                <ButtonSearch type="submit">Search</ButtonSearch>
            </FormInput>

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