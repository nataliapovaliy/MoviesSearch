import { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet, useLocation, useSearchParams } from "react-router-dom";
import { fetchMovieSearch } from "services/moviesApi";
import { FormInput, Input, ButtonSearch } from './MoviesPage.styled';

export const MoviesPage = () => {
    const [querySearchText, setQuerySearchText] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('searchText');
    const [isSearchMovie, setIsSearchMovie] = useState(false);

    const location = useLocation();
    console.log("location", location);

    useEffect(() => {
        if (query !== '' && query !== null)
        fetchMovieSearch(query)
            .then(data => {
                setQuerySearchText(data);
                if (data.length === 0) setIsSearchMovie(true);
            });
        
    },[query])

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        setSearchParams({ searchText: form.elements.searchText.value })
        form.reset();
        setIsSearchMovie(false);
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
                        <Link to={`${id}`} state={{from: location}}>{title}</Link>
                    </li>
                ))}
            </ul>

            {isSearchMovie && <p>We don't have any movie for this search.</p>}
        <Outlet />
    </>
    )

    
}