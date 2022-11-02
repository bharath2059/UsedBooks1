import React from 'react';
import {useState} from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native';
import {View} from 'react-native';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';

const WelcomePage = ({navigation}) => {
  return (
    <View style={styles.Main}>
      <SafeAreaView style={styles.wrapper}>
        <Image
          source={require('./../Assets/logo.jpeg')}
          style={styles.imageStyle}></Image>
        <Text style={styles.heading}> Welcome To UBooks</Text>
        <View style={styles.body}>
          <Text style={styles.info}>
            In this app, you can purchase an used book at low cost and also you
            can post an Ad for selling book if you any.
          </Text>
          <Text style={styles.info}>
            Click on the Create Account Button to Create Your Account or If you
            already has an account, click on Login Button to Signin.
          </Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text style={styles.buttonTextStyle}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate('LoginPage');
            }}>
            <Text style={styles.buttonTextStyle}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  Main: {
    backgroundColor: '#E8E8FF',
    display: 'flex',
  },
  wrapper: {
    // justifyContent: "center",
    alignItems: 'center',
    marginTop: 50,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
  },
  body: {
    margin: 20,
  },
  imageStyle: {
    height: 200,
    width: '30%',
    // left: 105,
    //bottom: 40,
    alignItems: 'center',
    position: 'relative',
    top: 30,
  },
  info: {
    fontWeight: '500',
    marginTop: 20,
  },
  buttonStyle: {
    backgroundColor: '#F97777',
    height: 45,
    width: 200,
    marginBottom: 20,
    // marginLeft:165,
    borderRadius: 10,
    marginTop: 60,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    fontSize: 25,
    textAlign: 'center',
    position: 'relative',
  },
});

export default WelcomePage;
