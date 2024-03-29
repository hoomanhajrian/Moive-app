import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { CardActionArea, Typography, Box, CardContent, Collapse, Button } from '@material-ui/core';
import NoAdultContentIcon from '@mui/icons-material/NoAdultContent';
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
        height: '100%',
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
        borderRadius: '15px',

    }
}))

const MovieCardFront = props => {
    const classes = getStyles();
    const { id, title, release_date, backdrop_path, adult, overview, original_language, vote_average, vote_count } = props.data;
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    const onCardClick = (e) => {
        e.preventDefault();
    }



    return (
        <Card className={classes.card} variant="outlined">
            <CardContent>
                <CardHeader title={title} subheaderTypographyProps={{ color: 'inherit' }} subheader={`Release Date: ${release_date}`} className={classes.title} />
                {adult ? <NoAdultContentIcon /> : <></>}
                {adult ?
                    <CardMedia
                        className={classes.cardMedia}
                        component="img"
                        height="auto"
                        image={`/adult.jpg`}
                        alt={title}
                    />
                    : backdrop_path === null ? <CardMedia
                        className={classes.cardMedia}
                        component="img"
                        height="auto"
                        image={`/no-image.png`}
                        alt={title}
                    /> : <CardMedia
                        className={classes.cardMedia}
                        component="img"
                        height="auto"
                        image={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                        alt={title}
                    />}
                <Box className={classes.wrapper}>
                    <Typography variant="subtitle1" ><strong>Score/Votes: </strong>{vote_average} / {vote_count}</Typography>
                    <Typography variant="subtitle1" >
                        <strong>Languages: </strong>{original_language}
                    </Typography>
                </Box>
            </CardContent>
            <CardActionArea className={classes.cardActionArea} id={id} onClick={onCardClick}>
                <Typography variant='h4'>Watch</Typography>
            </CardActionArea>
            <CardActions disableSpacing>
                <Button
                    className={classes.button}
                    color='secondary'
                    onClick={props.rotateCard}
                >
                    Watch trailer
                </Button>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon color='primary' />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {overview}
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default MovieCardFront;
