import axios from 'axios';
import { APP_KEY, MOIVE_URL } from '../config/api_config';

export const getMovies = async (page) => {
    const url = MOIVE_URL;
    try {
        const result = await axios.get(url, {
            params: {
                api_key: APP_KEY,
                page: page
            }
        })
        return result.data;
    }
    catch (err) {
        throw err;
    }
};
