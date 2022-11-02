import auth from '@react-native-firebase/auth';

export function signup(email, password) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function signIn(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}
