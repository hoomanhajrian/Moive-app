import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import MovieCard from './MovieCard';

const getStyles = makeStyles(theme => ({
    root: {
        margin: 'Sem 0'
    }
}))


const Movie = props => {
    const classes = getStyles();

    // const MovieWithId = id => {
    //     const array = id.split('#')
    //     const id = array[array.lenth - 1]
    //     return id
    // }

    return (
        <div>
            <Grid container spacing={5} className={classes.root}>
                {console.log(props.movies)}
                {props.movies.results.map(movie => {
                    const { id, title, poster_path } = movie

                    return (
                        <Grid>
                            <MovieCard
                                id={id}
                                title={title}
                                image={poster_path}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default Movie;