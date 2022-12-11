/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState, type PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homepage from './src/screens/homepage';
import CreateLoginPage from './src/screens/loginpage';
import CreateSignupPage from './src/screens/Signuppage';
import WelcomePage from './src/screens/welcomepage';
import Forgotpass from './src/screens/forgotpassword';
import Search from './src/screens/search';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

const App = () => {
  let initialRouteName = 'Welcome';
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();

  function onAuthstateChanged(user) {
    setUser(user);
    if (loading) setLoading(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthstateChanged);
    return subscriber;
  }, []);

  if (loading) return null;

  if (!user) {
    initialRouteName = 'Welcome';
  } else {
    console.log('hello');
    initialRouteName = 'Homepage';
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={CreateLoginPage} />
        <Stack.Screen name="SignUp" component={CreateSignupPage} />
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Forgotpasspage" component={Forgotpass} />

        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Welcome" component={WelcomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
