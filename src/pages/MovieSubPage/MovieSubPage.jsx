import { useFetchMovie } from "hooks/UseFetchMovie/UseFetchMovie"

export const MovieSubPage = () => {
    const movie = useFetchMovie();
    console.log(movie);
    return <div></div>
}