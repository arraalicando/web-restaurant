import { useState, useEffect } from 'react';
import { auth } from './firebase';
import Login from './Login';
import Dashboard from './Dashboard';
import Register from './Register';
import { Route, Switch, useHistory } from 'react-router-dom';
import DashboardHeader from './DashboardHeader';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Loading from './Loading';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setCurrentUser] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user.email);
        setCurrentUser(user.email);
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
    setIsLoading(false);
    return unsubscribe;
  }, []);


  const handleLogout = () => {
    setIsLoading(true);
    firebase.auth().signOut().then(() => {
      setLoggedIn(false);
      setCurrentUser('');
      setIsLoading(false);
      history.push('/Login');
    });
  }

  return (
      <div className={classes.root}>
        {isLoading && <Loading />}
        <DashboardHeader user={user} loggedIn={loggedIn} setIsLoading={setIsLoading} handleLogout={handleLogout}></DashboardHeader>
        <Dashboard classes={classes}/>      
        <Box component="footer" className={classes.footer}>
          <Typography variant="body1">&copy; 2023 My App</Typography>
        </Box>

        <Switch>
          <Route
              exact
              path="/"
              render={() => {<Dashboard classes={classes}/> }}
          />
          <Route path="Dashboard" component={Dashboard}/>
          <Route path="Register" component={Register}/>
          <Route path="Login" component={Login}/>
        </Switch>
      </div>
  )
}

export default App;