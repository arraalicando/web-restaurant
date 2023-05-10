import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Dialog, DialogContent, Link, DialogTitle, DialogActions, withStyles } from '@material-ui/core';
import Login from './Login';
import Register from './Register';

const StyledAppBar = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.info.light,
    height: "40px",
    "&.MuiAppBar-positionSticky": {
      margin: "40px 20px 0px 20px",
      width: "calc(100% - 40px)",
      "& .MuiToolbar-root": {
        color: "green",
        "& .MuiButtonBase-root": {
          fontSize: 24
        }
      }
    }
  }
}))(AppBar);

const DashboardHeader = ({user, loggedIn, setIsLoading, handleLogout}) => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [registerSuccessOpen, setRegisterSuccessOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setUser] = useState('');

  useEffect(() => {
    setIsLoggedIn(loggedIn);
    setUser(user);
  }, [loggedIn, user]);

  const setLoggedInTrue = () => {
    setIsLoggedIn(true);
  }

  const setLoggedInFalse = () => {
    setIsLoggedIn(false);
  }

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleRegisterOpen = () => {
    setRegisterOpen(true);
    handleLoginClose();
  };

  const handleRegisterClose = () => {
    setRegisterOpen(false);
  };

  const handleRegisterSuccessOpen = () => {
    handleRegisterClose();
    handleLogout();
    setRegisterSuccessOpen(true);
  };

  const handleRegisterSuccessClose = () => {
    setRegisterSuccessOpen(false);
  };

  const forceUserLogin = () => {
    handleRegisterSuccessClose();
    handleLoginOpen();
  }

  return (
    <div>          
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Website Name
          </Typography>
          <Button color="inherit">{currentUser}</Button>
          {isLoggedIn ? 
            <Button color="inherit" onClick={handleLogout}>Logout</Button> :
            <Button color="inherit" onClick={handleLoginOpen}>Login</Button>
          }
        </Toolbar>
      </AppBar>
      <StyledAppBar position="static">
        <Toolbar>
          
        </Toolbar>
      </StyledAppBar>

      <Dialog open={loginOpen} onClose={handleLoginClose}>
        <DialogContent>
          <Login 
            closeLogin={handleLoginClose}
            loggedInTrue={setLoggedInTrue}
            loggedInFalse={setLoggedInFalse}
            setIsLoading={setIsLoading}
          />
          <Typography variant="body2">
            Don't have an account?{' '}
            <Link to="/" onClick={handleRegisterOpen}>Create an account</Link>
          </Typography>
        </DialogContent>
      </Dialog>

      <Dialog open={registerOpen} onClose={handleRegisterClose}>
        <DialogContent>
          <Register onClose={handleRegisterClose} setIsLoading={setIsLoading}/>
        </DialogContent>
      </Dialog>

      <Dialog open={registerOpen} onClose={handleRegisterClose}>
        <DialogContent>
          <Register onOpen={handleRegisterSuccessOpen} setIsLoading={setIsLoading}/>
        </DialogContent>
      </Dialog>

      <Dialog open={registerSuccessOpen} onClose={handleRegisterSuccessClose}>
        <DialogTitle>Your account has been successfully created!</DialogTitle>
        <hr/>
        <DialogContent>Please login into the website using your credentials.</DialogContent>
        <hr/>
        <DialogActions>
          <Button onClick={forceUserLogin} color="primary">
            Login now
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DashboardHeader;
