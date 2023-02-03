import axios from 'axios';

const KEY = '2f1ef3830286d020340d6039bd2ecd1f';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchMoviesTrend() {
    const response = await axios('/trending/movie/day', {
        params: {
            api_key: KEY,
            size: 20,
        }
    })
    // console.log(response.data.results);
    return response.data.results;
}

export async function fetchMovieById(id) {
    const response = await axios(`/movie/${id}`, {
        params: {
            api_key: KEY,
        },
    });
    // console.log(response.data);
    return response.data;
}

export async function fetchMovieSearch(query) {
    const response = await axios(`/search/movie`, {
        params: {
            api_key: KEY,
            query,
        },
    });
    // console.log('data.results >>>', response.data.results);
    return response.data.results;
}

export async function fetchMovieCast(id) {
    const response = await axios(`/movie/${id}/credits`, {
        params: {
            api_key: KEY,
        },
    });

    return response.data.cast;
}

export async function fetchMovieReviews(id) {
    const response = await axios(`/movie/${id}/reviews`, {
        params: {
            api_key: KEY,
        },
    });

    return response.data.results;
}