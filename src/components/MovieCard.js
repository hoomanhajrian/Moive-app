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
    },
    card: {
        padding: '20'
    },
    cardMedia: {

    }
}))

const MovieCard = props => {
    const classes = getStyles();
    const { id, imageUrl, label, source, uri } = props

    // const { key, title, poster_path } = props
    return (
        <Card className={classes.card}>
            <Card key={id}>
                <CardHeader title={label} subheader={source} />
                <CardMedia className={classes.media} image={imageUrl} label={label} />
                <CardActions>
                    <Button size='small' color='primary'>
                    </Button>
                </CardActions>
            </Card>
        </Card>
    )
}

export default MovieCard;