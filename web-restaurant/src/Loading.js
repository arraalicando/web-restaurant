import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: theme.zIndex.modal + 1,
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <Box className={classes.overlay}>
      <CircularProgress color="secondary" />
    </Box>
  );
};

export default Loading;
