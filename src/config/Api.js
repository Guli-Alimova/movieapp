import AxiosClient from "./AxiosClient";


const apiCalls = {
    getMovies: (type, params) => {
        return AxiosClient.get(`movie/${type}`, {params});
    },
    getVideos: (id) => {
        return AxiosClient.get(`movie/${id}/videos`);
    },
    search: (params) => {
        return AxiosClient.get(`search/movie`, {params});
    },
    discover: (params) => {
        return AxiosClient.get(`discover/movie`, {params});
    },
    detail: (id, params) => {
        return AxiosClient.get(`movie/${id}`, {params});
    },
    actorsAndCast: (id) => {
        return AxiosClient.get(`movie/${id}/credits`);
    },
    similar: (id) => {
        return AxiosClient.get(`movie/${id}/similar`);
    },
    genres: (params) => {
        return AxiosClient.get('genre/movie/list', {params});
    },
}

export default apiCalls;