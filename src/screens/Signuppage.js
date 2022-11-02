import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import Input from '../Component/input';

import {signup} from '../Firebase/authentication';

const config = {
  fields: {
    name: {
      placeholder: 'Name',
      type: 'text',
      autoComplete: 'name', //Android
      textContentType: 'name', //iOS
    },
    email: {
      placeholder: 'Email',
      type: 'text',
      textContentType: 'emailAddress', //iOS
      autoComplete: 'email', //Android
    },
    password: {
      placeholder: 'Password',
      type: 'password',
      textContentType: 'newPassword', //iOS
    },
    confirmPassword: {
      placeholder: 'Confirm Password',
      type: 'password',
      textContentType: 'newPassword', //iOS
    },
  },
};
const CreateSignupPage = ({navigation}) => {
  const [email, onEmailChange] = React.useState(email);
  const [password, onPasswordChange] = React.useState(password);
  const [name, onNameChange] = React.useState(name);
  const [confirmPassword, onConfirmPasswordChange] =
    React.useState(confirmPassword);

  React.useEffect(() => {
    if (name === '') {
      onNameChange(null);
    }
  }, [name]);
  React.useEffect(() => {
    if (email === '') {
      onEmailChange(null);
    }
  }, [email]);
  React.useEffect(() => {
    if (password === '') {
      onPasswordChange(null);
    }
  }, [password]);
  React.useEffect(() => {
    if (confirmPassword === '') {
      onConfirmPasswordChange(null);
    }
  }, [confirmPassword]);

  function createAccount(email, password) {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Please enter all the required details');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Your password is not equal to confirm password');
      return;
    }
    if (password.length <= 5) {
      Alert.alert('please enter valid password');
      return;
    }
    signup(email, password)
      .then(() => {
        Alert.alert('your account is created with ', email);
        navigation.push('LoginPage');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
        Alert.alert(`${error}`);
      });

    return;
  }

  return (
    <SafeAreaView style={styles.Wrapper}>
      <View style={styles.box1}>
        <Image
          source={require('./../Assets/logo.jpeg')}
          style={styles.imageStyle}
        />
        <Text style={styles.HeadingText}>SignUp</Text>

        <Input
          value={name}
          config={config.fields.name}
          onChangeText={onNameChange}
        />

        <Input
          value={email}
          config={config.fields.email}
          onChangeText={onEmailChange}
        />

        <Input
          value={password}
          config={config.fields.password}
          onChangeText={onPasswordChange}
        />

        <Input
          value={confirmPassword}
          config={config.fields.confirmPassword}
          onChangeText={onConfirmPasswordChange}
        />

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            createAccount(email, password);
          }}>
          <Text style={styles.buttonTextStyle}>Signup</Text>
        </TouchableOpacity>

        <Text style={styles.link} onPress={() => {}}>
          Already have an account...?
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    // paddingTop:170,
    backgroundColor: '#E8E8FF',
  },
  HeadingText: {
    fontSize: 40,

    fontWeight: 'bold',
    textAlign: 'center',
  },

  box1: {
    position: 'relative',
    // top : 20,
    alignItems: 'center',
  },
  link: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0b780e',
  },

  textInputStyle: {
    height: 50,
    width: '80%',
    backgroundColor: '#D9D9D9',
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 10,
    position: 'relative',
    top: 40,
  },
  imageStyle: {
    height: 200,
    width: '30%',
    // left: 105,
    //bottom: 40,
    alignItems: 'center',
    position: 'relative',
    //top : 30
  },

  /*textInputStyle2: {
        height: 40,
        width: 250,
        backgroundColor: '#D9D9D9',
        marginBottom: 0,
        marginTop:100,
        marginLeft:80,
        borderRadius:10
    },*/

  /*textInputStyle1: {
        height: 40,
        width: 250,
        backgroundColor: '#D9D9D9',
        marginBottom: 0,
        marginTop:30,
        marginLeft:80,
        borderRadius:10 

    },*/
  InputTextStyle: {
    position: 'relative',
    top: 5,
    fontSize: 18,
    marginLeft: 5,
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: '#F97777',
    height: 45,
    width: '70%',
    //marginBottom: 20,
    //marginLeft:150,
    borderRadius: 10,
    marginTop: 80,
    alignItems: 'center',
  },
  buttonTextStyle: {
    fontSize: 25,
    textAlign: 'center',
    position: 'relative',
  },
});

export default CreateSignupPage;
