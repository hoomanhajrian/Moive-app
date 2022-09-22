import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MovieCard from './subComponents/MovieCard';
import { getMovies } from '../../Services/Services';
import Loading from '../Loading';
import { Box } from '@mui/material';
import { TextField, Typography } from '@material-ui/core';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';


const Movies = () => {

    const classes = getStyles();
    const [movies, updateMovies] = useState([]);
    const [orgData, updateOrgData] = useState({});
    const [page, changePage] = useState(1);

    const filterMovies = (e) => {
        console.log(e.target.value);
    };

    const prePage = () => {
        if (page > 1) changePage(page - 1);
    }
    const nextPage = () => {
        if (page < orgData.total_pages) changePage(page + 1);
    }

    useEffect(() => {
        getMovies(page)
            .then(
                result => {
                    updateOrgData(result);
                    updateMovies(result.results);
                }
            )
            .catch(
                (err) => console.log(err)
            );
    }, [page]);



    console.log();

    return (
        <>
            <Box variant='div'>
                <TextField
                    onChange={filterMovies}
                    label="Search"
                    labelid="select-label"
                    variant="outlined"
                    className={classes.TextField}
                />
                <Box className={classes.pageChanger}>
                    <NavigateBeforeIcon onClick={prePage} />
                    <Typography variant='h6'>{page} / {orgData.total_pages}</Typography>
                    <NavigateNextIcon onClick={nextPage} />
                </Box>
            </Box>
            <Box className={classes.movies} sx={{ gridTemplateColumns: movies.length > 1 ? '1fr 1fr' : '1fr 1fr 1fr' }}>
                {
                    movies.length < 1 ?
                        <Loading />
                        :
                        movies.map((movie) => {
                            return <MovieCard data={movie} key={movie.id} />
                        })
                }
            </Box>
        </>
    )
}


const getStyles = makeStyles(theme => ({
    movies: {
        padding: '2rem',
        display: 'grid',
        gridGap: '3rem'
    },
    TextField: {
        marginLeft: '2rem',
        width: '30%'
    },
    pageChanger: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
}))

export default Movies;

