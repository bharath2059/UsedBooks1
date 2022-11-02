/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homepage from './src/screens/homepage';
import CreateLoginPage from './src/screens/loginpage';
import CreateSignupPage from './src/screens/Signuppage';
import WelcomePage from './src/screens/welcomepage';
import Forgotpass from './src/screens/forgotpassword';
import Search from './src/screens/search';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
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
