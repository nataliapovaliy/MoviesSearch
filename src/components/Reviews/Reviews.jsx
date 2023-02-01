import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { fetchMovieReviews } from "services/moviesApi";

export const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const {movieId} = useParams();

    useEffect (() => {
        fetchMovieReviews(movieId)
            .then(data => {
                console.log(data);
                setReviews(data);
            });
                
    }, [movieId]);

    return (
        <>
        {reviews && (
            <ul>
                {reviews.map(({id, author, content }) => (
                <li key={id}>
                    <p>Author: {author}</p>
                    <p>{content}</p>
                </li>
            ) )}
            </ul>
        )}
        </>
    )
}


