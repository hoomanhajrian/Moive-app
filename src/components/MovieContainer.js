import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import MovieCard from './MovieCard';

const getStyles = makeStyles(theme => ({
    root: {
        margin: 'Sem 0'
    }
}))


const array = [1, 2, 3]

const MovieContainer = props => {

    const classes = getStyles();
    return (
        <Grid container spacing={5} className={classes.root}>
            {console.log("the OBJ", props.movies)}

            {array.map(x => {
                return (
                    <Grid item xs={3}>
                        item {x}
                    </Grid>
                )
            })}

        </Grid>
    )
}

export default MovieContainer;

