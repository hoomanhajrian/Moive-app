import React, { Component } from "react";

import Loading from '../Loading';
import Movie from '../MovieContainer';
import { getMovies } from '../../Services/Services';



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

        getMovies().then(movies => {
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
                <div>
                    {isLoading ? <Loading /> : <Movie movies={movies} />}
                </div>
            </div>
        )
    }



}
