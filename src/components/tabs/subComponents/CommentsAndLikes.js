import React, { useState } from 'react';
import { Box, CardContent, CardHeader, Typography, Card } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Avatar from '@mui/material/Avatar';


const comments = [
    {
        id: 1,
        owner: 'Josh Davidson',
        title: 'Best movie ever',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto praesentium cumque expedita. Consequatur, aliquid! Quaerat harum culpa obcaecati doloribus cupiditate numquam exercitationem? Repellendus in, laudantium, praesentium placeat iusto blanditiis quaerat itaque eos optio ab quis nihil facere vitae, explicabo nobis omnis illo. Quae quis, neque est optio aspernatur illo totam assumenda iure numquam provident maiores, unde impedit laboriosam molestiae repellendus quod adipisci dolor quisquam debitis facilis? Placeat nesciunt facilis labore, corrupti, modi aut possimus quo officiis eveniet, fuga non!',
    },
    {
        id: 2,
        owner: 'Joe Smithe',
        title: 'Its a must watch',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non temporibus, molestias dolore earum at numquam iure esse cumque doloremque sunt corporis aspernatur a odio laudantium nulla quod mollitia pariatur maxime vel? Quae iste inventore quisquam.',
    }

]

const stringToColor = (string) => {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}


const stringAvatar = (name) => {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

const getStyles = makeStyles(theme => ({
    likesCommentsContainer: {
        width: '90%',
    },
    commentsSection: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    commentCard: {
        width: '100%',
        padding: '1rem',
        margin: '2rem',
        borderRadius: '15px'
    }
}));

const CommentsAndLikes = () => {
    const classes = getStyles();
    return (
        <Box className={classes.likesCommentsContainer}>
            <Box className={classes.commentsSection}>
                <Typography variant='h4'>Comments</Typography>
                {comments.map(comment => {
                    return (
                        <Card key={comment.id} className={classes.commentCard} outlined>
                            <Avatar {...stringAvatar(`${comment.owner}`)} />
                            <CardHeader title={comment.title} subheader={`By: ${comment.owner}`} />
                            <CardContent>
                                <Typography variant='body1'>
                                    {comment.description}
                                </Typography>
                            </CardContent>
                        </Card>)
                })}
            </Box>
        </Box>

    )

};

export default CommentsAndLikes;