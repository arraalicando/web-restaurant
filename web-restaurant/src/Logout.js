import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

const Logout = () => {
  const history = useHistory();

  useEffect(() => {
    firebase.auth().signOut().then(() => {
      history.push('/Login');
    });
  }, [history]);

  return null;
};

export default Logout;