import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Movies from './components/tabs/Movies';
import Watch from './components/tabs/Watch';
import './App.css';
import logoSmall from './headerImages/site-title-small.png';
import logoBig from './headerImages/site-title.png';
import Search from './components/tabs/Search';
import About from './components/tabs/About';

function TabPanel(props) {
  const { children, value, index } = props;

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
    <Box variant='main' className={classes.root}>
      <Box variant='header' className={classes.appHeader}>
        <picture className={classes.header}>
          <source srcSet={logoSmall} width='80px' media="(max-width: 900px)"></source>
          <img src={logoBig} width='350px' alt="movie-time-logo" />
        </picture>
      </Box>
      <Box className={classes.mainContainer}>
        <AppBar position="static" className={classes.appBar}>
          <Tabs variant="fullWidth" indicatorColor='secondary' value={value} onChange={handleChange} aria-label="tabs">
            <Tab label="Movies" />
            <Tab label="Watch" />
            <Tab label="Search All" />
            <Tab label="About" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Movies />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Watch />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Search />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <About />
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
  appHeader: {
    background: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: '0 2rem',
  },
  header: {
    textAlign: 'center',
    margin: '0',
    padding: '1rem',
    border: 'none',
  },
  appBar: {
    backgroundColor: 'black',
    border: 'none',
  }
}));