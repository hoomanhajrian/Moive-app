import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Movies from './components/tabs/Movies';
import Search from './components/tabs/Search';
import Tv from './components/tabs/Tv';
import { Typography } from '@material-ui/core';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};




const App = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.root}>
      <Box border={1} className={classes.appName}><Typography variant='h2' className={classes.header}>Movie App</Typography></Box>
      <Box border={1} className={classes.mainContainer}>
        <AppBar position="static" variant="outlined" className={classes.appBar}>
          <Tabs variant="fullWidth" indicatorColor="secondary" value={value} onChange={handleChange} aria-label="tabs">
            <Tab label="Movies" />
            <Tab label="Search" />
            <Tab label="Tv Shows" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Movies />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Search />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Tv />
        </TabPanel>
      </Box>
    </Box>
  );
}


export default App;




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    margin: '0',
    padding: '0'
  },
  appName: {
    marginLeft: 'auto',
    marginRight: 'auto',
    background: 'black'
  },
  header: {
    textAlign: 'center',
    margin: '0',
    padding: '1rem',
    border: 'none',
    color: 'white'
  },
  appBar: {
    backgroundColor: 'black',
    border: 'none'
  }
}));