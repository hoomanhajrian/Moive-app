import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { CardActionArea, Typography, Box } from '@material-ui/core';
import NoAdultContentIcon from '@mui/icons-material/NoAdultContent';
import { useHistory } from 'react-router-dom';

const getStyles = makeStyles(theme => ({
    card: {
        height: '100%',
        backgroundColor: '#1b1b1b',
        color: 'white',
        padding: '1rem'
    },
    wrapper: {
        padding: '.5rem'
    },
    title: {
        '&:nextchild': {
            color: 'white'
        }
    }
}))

const MovieCard = props => {
    const classes = getStyles();
    const { id, title, release_date, poster_path, backdrop_path, adult, overview, original_language, vote_average, vote_count } = props.data;
    const history = useHistory();

    const onCardClick = (e) => {
        e.preventDefault();
        console.log(e);
    }



    return (
        <Card className={classes.card} >
            <CardActionArea id={id} onClick={onCardClick}>
                <CardHeader title={title} subheader={`Release Date: ${release_date}`} className={classes.title} />
                {adult ? <NoAdultContentIcon /> : <></>}
            </CardActionArea>
            <CardMedia

                component="img"
                height="auto"
                image={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt={title}
            />
            <Box className={classes.wrapper}>
                <Typography variant="subtitle1" ><strong>Score/Votes: </strong>{vote_average} / {vote_count}</Typography>
                <Typography variant="subtitle1" >
                    <strong>Languages: </strong>{original_language}
                </Typography>
                <details>
                    <summary><strong>Description </strong></summary>
                    <p>{overview}</p>
                </details>

            </Box>
        </Card>
    )
}

export default MovieCard;
