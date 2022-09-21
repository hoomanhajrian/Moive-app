import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/Styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl } from '@material-ui/core';


const getStyles = makeStyles(theme => ({
    root: {
        width: '50%',
        marginRight: 'auto',
        marginLeft: 'auto',
        padding: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    TextField: {
        width: '50%'
    },
    Select: {
        width: '20%'
    }
}))

const doSomething = () => {

};

const SearchForm = () => {
    const classes = getStyles();
    return (
        <FormControl onSubmit={doSomething} className={classes.root}>
            <TextField
                label="Search"
                labelid="select-label"
                variant="outlined"
                className={classes.TextField}
            />
        </FormControl>
    )

}


export default SearchForm;