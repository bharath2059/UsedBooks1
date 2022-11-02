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
const config = {
  fields: {
    email: {
      placeholder: 'Email',
      type: 'text',
      textContentType: 'emailAddress', //iOS
      autoComplete: 'email', //Android,
      name: 'email',
    },
  },
};
const Forgotpass = ({navigation}) => {
  const [email, onEmailChange] = React.useState(email);
  React.useEffect(() => {}, [email]);
  return (
    <View style={styles.Wrapper}>
      <View>
        <Text style={styles.HeadingText}>Forgot Your Password</Text>
        <Text style={styles.info}>
          Enter your Email id below, we will send you an link to reset your
          password.
        </Text>
      </View>
      <Input
        value={email}
        config={config.fields.email}
        onChangeText={onEmailChange}
      />

      <TouchableOpacity style={styles.buttonStyle}>
        <Text
          style={styles.buttonTextStyle}
          onPress={() => {
            navigation.navigate('LoginPage');
          }}>
          Send
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 3,
    alignItems: 'center',
    //justifyContent : "center",
    paddingTop: 80,
    backgroundColor: '#E8E8FF',
    width: '100%',
  },
  HeadingStyle: {
    //marginBottom :
  },
  HeadingText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textInputStyle: {
    height: 40,
    width: '90%',
    backgroundColor: '#D9D9D9',
    marginBottom: 0,
    marginTop: 80,
    //marginLeft: 80,
    borderRadius: 10,
  },
  InputTextStyle: {
    position: 'relative',
    top: 5,
    fontSize: 18,
    // marginLeft: 5,
  },
  buttonStyle: {
    backgroundColor: '#F97777',
    height: 50,
    width: '70%',
    marginBottom: 20,
    //marginLeft: 150,
    borderRadius: 10,
    marginTop: 60,
  },
  buttonTextStyle: {
    fontSize: 25,
    textAlign: 'center',
    position: 'relative',
    top: 10,
  },
  info: {
    fontWeight: '500',
    margin: 20,
  },
});

export default Forgotpass;
