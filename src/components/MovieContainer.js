import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import MovieCard from './MovieCard';


const Movie = props => {
    const classes = getStyles();
    return (
        <Grid container spacing={5} className={classes.root}>
            {console.log("the OBJ", props.movies.results)}
            {/* {props.movies.results.map(movieObject => {
                const { id } = movieObject;
                return (
                    <Grid item xs={3}>
                        <MovieCard />
                    </Grid>
                )
            })} */}


        </Grid>
    )
}

export default Movie;

const getStyles = makeStyles(theme => ({
    root: {
        margin: 'Sem 0'
    }
}))

