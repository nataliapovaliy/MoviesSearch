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
                console.log('reviews', data);
                setReviews(data);
            });
                
    }, [movieId]);

    return (
        <>
        {reviews !== null ? (
            <ul>
                {reviews.map(({id, author, content }) => (
                <li key={id}>
                    <p>Author: {author}</p>
                    <p>{content}</p>
                </li>
            ) )}
            </ul>
            ) : <p>We don't have any reviews for this movie.</p>
        }
        </>
    )
}


