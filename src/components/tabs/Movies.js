import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MovieCard from './subComponents/MovieCard';
import { getMovies } from '../../Services/Services';
import Loading from '../Loading';
import { Box } from '@mui/material';
import { Container, TextField, Typography } from '@material-ui/core';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';


const Movies = () => {

    const classes = getStyles();
    const [movies, updateMovies] = useState([]);
    const [orgData, updateOrgData] = useState({});
    const [page, changePage] = useState(1);
    const [isLoading, setLoading] = useState(true);

    const filterMovies = (e) => {
        const target = e.target.value;
        if (target === '') {
            updateMovies(orgData.results);
        }
        else {
            let filteredData = orgData.results.filter((movie) => {
                return movie.title.toLowerCase().includes(target.toLowerCase());
            });
            updateMovies(filteredData);

        }
    };

    const prePage = () => {
        if (page > 1) changePage(Number(page) - 1);
    }
    const nextPage = () => {
        if (page < orgData.total_pages) changePage(Number(page) + 1);
    }

    useEffect(() => {
        const pageField = document.getElementById("page-changer");
        setLoading(true);
        getMovies(page)
            .then(
                result => {
                    updateOrgData(result);
                    updateMovies(result.results);
                    setLoading(false);
                }
            )
            .catch(
                (err) => console.log(err)
            );
        if (pageField) pageField.value = page;
    }, [page]);


    return (
        <Container variant='div'>
            <Box variant='div' className={classes.searchPageWrapper}>
                <TextField
                    onChange={filterMovies}
                    label="Search"
                    labelid="filter-movies"
                    variant="outlined"
                    className={classes.searchField}
                />
                <Box className={classes.pageWrapper}>
                    <TextField
                        onChange={e => changePage(e.target.value === '' ? 1 : Number(e.target.value))}
                        label='Page'
                        id='page-changer'
                        labelid="page-changer"
                        InputProps={{ inputProps: { min: 1, max: orgData.total_pages } }}
                        type="number"
                        defaultValue={1}
                        variant="outlined"
                        className={classes.searchField}
                    />
                    <Box className={classes.pageChanger}>
                        <NavigateBeforeIcon onClick={prePage} />
                        <Typography variant='h6'>{page} / {orgData.total_pages}</Typography>
                        <NavigateNextIcon onClick={nextPage} />
                    </Box>
                </Box>
            </Box>
            {!isLoading ?
                <Box className={classes.movies} >
                    {
                        movies.length < 1 ?
                            <Loading />
                            :
                            movies.map((movie) => {
                                return <Box variant='div' key={movie.id} id={`movie${movie.id}`}><MovieCard data={movie} /></Box>
                            })
                    }
                </Box>
                :
                <Loading />}
            <Box className={classes.pageWrapper}>
                <Box className={classes.pageChanger}>
                    <NavigateBeforeIcon onClick={prePage} />
                    <Typography variant='h6'>{page} / {orgData.total_pages}</Typography>
                    <NavigateNextIcon onClick={nextPage} />
                </Box>
            </Box>
        </Container>
    )
}


const getStyles = makeStyles(theme => ({
    movies: {
        padding: '2rem',
        display: 'grid',
        gridGap: '3rem',
        [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: '1fr 1fr 1fr'
        },
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr 1fr'
        },
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr'
        }

    },
    pageChanger: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 'auto',
        fontSize: '10px'
    },
    searchPageWrapper: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '3rem',
        margin: '2rem'
    },
    pageWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%'
    }
}))

export default Movies;

