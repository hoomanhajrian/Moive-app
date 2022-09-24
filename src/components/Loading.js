import * as React from 'react';
import CircularProgress, {
    circularProgressClasses,
} from '@mui/material/CircularProgress';
import { makeStyles } from '@material-ui/styles';


const getStyles = makeStyles(theme => ({
    loading: {
        display: 'block !important',
        margin: 'auto',
        marginBottom: '2rem'
    }
}))



const Loading = () => {

    const classes = getStyles();

    return (
        <CircularProgress
            className={classes.loading}
            variant="indeterminate"
            disableShrink
            sx={{
                color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
                animationDuration: '550ms',
                left: '200px !important',
                [`& .${circularProgressClasses.circle}`]: {
                    strokeLinecap: 'round',
                },
            }}
            size={40}
            thickness={4}
        />
    )
}
export default Loading;