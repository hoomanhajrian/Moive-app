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
        <form onSubmit={doSomething} className={classes.root}>
            <TextField
                label="Search"
                labelId="select-label"
                variant="outlined"
                className={classes.TextField}
            />
            <Select
                variant="outlined"
                labelId="select-label"
                id="simple-select"
                defaultValue="multi"
                className={classes.Select}
            >
                <MenuItem value={"multi"}>Multi</MenuItem>
                <MenuItem value={"movies"}>Movies</MenuItem>
                <MenuItem value={"tv"}>TV Shows</MenuItem>
            </Select>

            <Button
                variant="contained"
                type="submit"
            >
                Search
            </Button>
        </form>
    )

}


export default SearchForm;