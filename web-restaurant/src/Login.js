import { useState } from 'react';
import { auth } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
  Typography,
  Container,
  Box
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10),
    width: theme.spacing(700),
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
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login({closeLogin, loggedInTrue, loggedInFalse, setIsLoading}) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      loggedInTrue();
      closeLogin();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      loggedInFalse();
      setError(error.message);
    }
  };

  return (
    <Container maxWidth="xs" className={classes.container} >
      <Box mt={5}>
        <Typography variant="h4" align="center">
          Login
        </Typography>
        <form className={classes.form} onSubmit={handleLogin}>
          {error && <Typography color="error">{error}</Typography>}
          <br/>
          <TextField
            className={classes.textField}
            fullWidth
            variant="outlined"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl fullWidth variant="outlined">
            <InputLabel>Password</InputLabel>
            <OutlinedInput
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            className={classes.submitButton}
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Login;
