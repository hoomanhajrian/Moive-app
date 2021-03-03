import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SearchForm from './components/SearchForm';
import Movies from './components/tabs/Movies';
import Search from './components/tabs/Search';
import Tv from './components/tabs/Tv';


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
          <Typography>{children}</Typography>
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



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  appName: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px',
    marginBottom: '20px',
    width: '95%',
  },
  header: {
    textAlign: 'center'
  },
  mainContainer: {
    margin: '20px'
  }
}));

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Box border={1} className={classes.appName}><h1 className={classes.header}>React Movie App</h1></Box>
      <SearchForm />
      <Box border={1} className={classes.mainContainer}>
        <AppBar position="static" variant="outlined" >
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
    </div>
  );
}
