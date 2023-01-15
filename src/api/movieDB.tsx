import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '0f79c0ed599ab4f9002ed3331c06363e',
        language: 'es-ES'
    }
})

export default movieDB