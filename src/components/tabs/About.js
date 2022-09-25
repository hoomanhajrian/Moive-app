import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    aboutMeContainer: {

    },
    aboutTitle: {
        textAlign: 'center',
        margin: '1rem'
    },
    aboutMeContent: {
        margin: '3rem'
    }
}))

const About = () => {

    const classes = useStyles();

    return (
        <Box variant='div' className={classes.aboutMeContainer}>
            <Typography variant='h4' className={classes.aboutTitle}>ABOUT ME</Typography>
            <Box variant='div' className={classes.aboutMeContent}>
                <Typography variant='body1'>I coded this web site and used Movie API for getting the data with the ability to search between all the movies and each page you get.</Typography>
                <Typography variant='body1'>Framework used is React and I used Material ui for most of the components and styling.</Typography>
                <Typography variant='body1'>You can contact me through my website <a target='_blank' rel="noreferrer" href='https://hh-portfolio.com'>hh-portfolio.com</a> and if you are interested in coding with me or contributions just let me know.</Typography>
            </Box>
        </Box>
    )

}

export default About;