import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';

const Dashboard = (classes) => {
  return (
    <Container component="main" className={classes.main} maxWidth="lg">
      <Typography variant="h2">Dashboard</Typography>
      <Typography variant="body1">
        This is your dashboard. You can see all of your important information
        here.
      </Typography>
    </Container>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};
export default Dashboard;
