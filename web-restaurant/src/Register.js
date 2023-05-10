import React, { useState } from 'react';
import RegisterUser from './RegisterUser';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography, Box, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(3, 0, 0),
    width: theme.spacing(700),
    paddingLeft: theme.spacing(1)
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  textField: {
    margin: theme.spacing(1),
  },
  submitButton: {
    margin: theme.spacing(3, 1, 5),
  },
}));

const Register = ({onOpen, setIsLoading}) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      await RegisterUser(email, password);
      onOpen();
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="xs" className={classes.container} >
      <Box mt={5}>       
          <Typography variant="h4" align="center">
            Register
          </Typography>
        <form onSubmit={handleSubmit}>
          {error && <Typography color="error">{error}</Typography>}
          <br/>
          <TextField
            className={classes.textField}
            fullWidth
            variant="outlined"
            label="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            className={classes.textField}
            fullWidth
            variant="outlined"
            label="Password"
            value={password}
            type='password'
            onChange={handlePasswordChange}
          />
          <Button
            className={classes.submitButton}
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
          >
            Register
          </Button>            
        </form>
      </Box>
    </Container>
  );
};

export default Register;