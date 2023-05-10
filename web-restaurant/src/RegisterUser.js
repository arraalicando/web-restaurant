import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/auth';

const RegisterUser = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User registered successfully
      const user = userCredential.user;
      console.log('User registered:', user);
      return user;
    })
    .catch((error) => {
      // Handle registration errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Registration error:', errorCode, errorMessage);
      throw error;
    });
};

export default RegisterUser;