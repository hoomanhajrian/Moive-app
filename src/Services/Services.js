import axios from 'axios';
import { APP_KEY, MOIVE_URL } from '../config/api_config';

export const getMovies = async () => {
    const url = MOIVE_URL;
    try {
        const res = await axios.get(url, {
            params: {
                api_key: APP_KEY,
            }
        })
        const movies = res.data;
        return movies;
    } catch (err) {
        throw err;
    }
};
