import React, { Component } from "react";
import axios from 'axios';
import { APP_KEY, MOIVE_URL } from '../../config/api_config';
import Loading from '../Loading';
import Movie from '../movie';


export const getmovies = async () => {
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


export default class Movies extends Component {
    state = {
        movieName: '',
        movies: [],
        isLoading: false,
    }
    fetchMovies = () => {
        console.log("fetching movies!")

        this.setState({
            isLoading: true,
        })

        getmovies().then(movies => {
            this.setState({
                movies
            })
        })
    }

    render() {
        const { isLoading, movies } = this.state
        return (
            <div>
                <header><h1>Movies</h1></header>
                <ul id="movies">
                    {/* {isLoading ? <Loading /> : this.fetchMovies(), <Movie movies={movies} />} */}
                </ul>
            </div>
        )
    }



}
