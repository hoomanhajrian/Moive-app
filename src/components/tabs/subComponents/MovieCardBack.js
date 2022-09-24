import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { CardActionArea, Typography, Box, CardContent, Collapse, Button } from '@material-ui/core';
import NoAdultContentIcon from '@mui/icons-material/NoAdultContent';
// import { useHistory } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';



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
    }
}))

const MovieCardBack = props => {
    const classes = getStyles();

    return (
        <Card className={classes.card} variant="outlined">
            <Button color='secondary' onClick={props.rotateCard}>{`< Back`}</Button>
        </Card>
    )
}

export default MovieCardBack;
