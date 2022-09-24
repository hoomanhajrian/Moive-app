import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Box, Typography } from '@material-ui/core';
import { Button, CardContent } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import anime from 'animejs/lib/anime.es.js';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const getStyles = makeStyles(theme => ({
    card: {
        height: 'auto',
        backgroundColor: '#1b1b1b',
        color: 'white',
        padding: '1rem',
        borderRadius: '15px',
        transform: 'rotateY(180deg);'
    },
    wrapper: {
        padding: '.5rem'
    },
    title: {
        color: 'white',
        paddingLeft: '0'
    },
    cardActionArea: {
        textAlign: 'center',
        background: 'darkred',
        borderRadius: '15px',
        '& :hover': {
            background: 'red',
            borderRadius: '15px',
        },
        '& h4': {
            padding: '1rem',
        }
    },
    cardMedia: {
        borderRadius: '15px'
    },
    video: {
        width: '100%'
    },
    likeFavWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: '.5rem'
    }
}))

const MovieCardBack = props => {
    const [liked, changeLiked] = useState(false);
    const [favorite, changeFavorite] = useState(false);
    const classes = getStyles();

    const rotateBack = () => {

        props.rotateCard();
        const movieCard = document.querySelector(`#movie${props.data.id}`);

        anime({
            targets: movieCard,
            rotateY: -360,
            loop: false,
            duration: 3000,
        });
    };

    return (
        <Card className={classes.card} variant="outlined">
            <Button color='secondary' onClick={rotateBack}>{`< Back`}</Button>
            <CardContent>
                <video controls className={classes.video} />
                <Box className={classes.likeFavWrapper}>
                    {liked ? <ThumbUpIcon sx={{ color: 'lightblue' }} onClick={() => { changeLiked(!liked) }} /> : <ThumbUpOffAltIcon onClick={() => { changeLiked(!liked) }} />}
                    {favorite ? <FavoriteIcon sx={{ color: 'red' }} onClick={() => { changeFavorite(!favorite) }} /> : <FavoriteBorderIcon onClick={() => { changeFavorite(!favorite) }} />}
                </Box>
                <Typography>
                    {props.data.overview}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default MovieCardBack;
