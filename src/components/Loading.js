import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress, {
    circularProgressClasses,
} from '@mui/material/CircularProgress';



const Loading = () => {

    return (
        <CircularProgress
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