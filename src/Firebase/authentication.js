import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/auth';
import {useInRouterContext} from 'react-router';

export function signup(email, password, name) {
  return auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      user.user.updateProfile({
        displayName: name,
      });
    });
}

export function signIn(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function isUser() {
  const user = firebase.auth().currentUser;
  if (user) {
    console.log('User email: ', user.email);
    console.log(user.displayName);
    return user;
  }
}
