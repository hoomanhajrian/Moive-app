import React, { Component } from "react";

import Loading from '../Loading';
import MovieContainer from '../MovieContainer';
import { getMovies } from '../../Services/Services';
import Box from '@material-ui/core/Box';


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
            <Box>
                {isLoading ? <Loading /> : this.fetchMovies(), <MovieContainer movies={movies} />}
            </Box>
        )
    }



}
