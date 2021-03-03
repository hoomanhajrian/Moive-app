import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';


const getStyles = makeStyles(theme => ({
    media: {
        height: 0,
        paddingTop: '56.25%'
    }
}))

const MovieCard = props => {
    const classes = getStyles();
    const { key, title, poster_path } = props
    console.log(props);
}

export default MovieCard;