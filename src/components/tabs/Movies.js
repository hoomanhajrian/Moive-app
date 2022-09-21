import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MovieCard from './subComponents/MovieCard';
import { getMovies } from '../../Services/Services';
import Loading from '../Loading';
import { Box } from '@mui/material';


const getStyles = makeStyles(theme => ({
    movies: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
    },
    loading: {
        display: 'none'
    }

}))


const Movies = () => {

    const classes = getStyles();
    console.log(classes);
    const [movies, updateMovies] = useState([]);
    useEffect(() => {
        // getMovies()
        //     .then(
        //         result => {
        //             updateMovies(result);
        //         }
        //     )
        //     .catch(
        //         (err) => console.log(err)
        //     );
    }, []);
    return (
        <Box className={classes.movies}>
            {console.log(movies)}
            {
                movies.length < 1 ?
                    <Loading className={classes.loading} />
                    :
                    movies.results.map((movie) => {
                        return <MovieCard data={movie} key={movie.id} />
                    })
            }
        </Box>
    )
}

export default Movies;

