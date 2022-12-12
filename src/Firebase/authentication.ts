import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/auth';
import {useInRouterContext} from 'react-router';

export function signup(email: string, password: string, name: string) {
  return auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      user.user.updateProfile({
        displayName: name,
      });
    });
}

export function signIn(email: string, password: string) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function isUser() {
  return firebase.auth().currentUser;
}

export async function logout() {
  await auth()
    .signOut()
    .then(() => {
      console.log('user signedout');
    });
}
