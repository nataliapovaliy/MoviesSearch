import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { fetchMovieReviews } from "services/moviesApi";
import { TitleAuthor } from './Reviews.styled';

const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const {movieId} = useParams();

    useEffect (() => {
        fetchMovieReviews(movieId)
            .then(data => {
                // console.log('reviews', data);
                setReviews(data);
            });
                
    }, [movieId]);

    return (
        <>
        {reviews && reviews.length > 0 ? (
            <ul>
                {reviews.map(({id, author, content }) => (
                <li key={id}>
                    <TitleAuthor>Author: {author}</TitleAuthor>
                    <p>{content}</p>
                </li>
            ) )}
            </ul>
            ) : (<p>We don't have any reviews for this movie.</p>)
        }
        </>
    )
}

export default Reviews
