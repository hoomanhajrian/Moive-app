import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { MOIVE_URL } from '../../../config/api_config';

const getStyles = makeStyles(theme => ({
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    card: {
        // padding: '20'
    },
    cardMedia: {

    }
}))

const MovieCard = props => {
    const classes = getStyles();
    const { title, poster_path } = props.data;
    return (
        <Card className={classes.card}>
            <CardHeader title={title} />
            <CardMedia
                image={`${MOIVE_URL}/${poster_path}`}
            />
        </Card>
    )
}

export default MovieCard;

// adult
// :
// false
// backdrop_path
// :
// "/2RSirqZG949GuRwN38MYCIGG4Od.jpg"
// genre_ids
// :
// [53]
// id
// :
// 985939
// original_language
// :
// "en"
// original_title
// :
// "Fall"
// overview
// :
// "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights"
// popularity
// :
// 6824.053
// poster_path
// :
// "/spCAxD99U1A6jsiePFoqdEcY0dG.jpg"
// release_date
// :
// "2022-08-11"
// title
// :
// "Fall"
// video
// :
// false
// vote_average
// :
// 7.4
// vote_count
// :
// 753