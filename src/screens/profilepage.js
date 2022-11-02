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

const Profilepage = ({navigation, routes}) => {
  const SignOut = () => {
    Alert.alert('Attention', 'Are you sure to sign out', [
      {
        text: 'yes',
        onPress: () => {
          navigation.reset({index: 0, routes: [{name: 'LoginPage'}]});
        },
      },
      {
        text: 'No',
        onPress: () => {
          console.log('No clicked');
        },
      },
    ]);
  };
  return (
    <View style={styles.Wrapper}>
      <View style={styles.box1}>
        <Text style={styles.HeadingText}>Profile</Text>
        <View style={styles.box2}>
          <Image
            style={styles.imageStyle}
            source={require('./../Assets/profile.png')}
          />
        </View>
        <View>
          <Text style={styles.textStyle}>Username : Kartik Soni</Text>
          <Text style={styles.textStyle}>Email : sonikartik@gmail.com</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle1}>
            <Text style={styles.buttonTextStyle}>Your Adds</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle1}
            onPress={() => {
              SignOut();
            }}>
            <Text style={styles.buttonTextStyle}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: '#E8E8FF',
    alignItems: 'center',
  },
  HeadingText: {
    marginBottom: 40,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  box2: {
    marginBottom: 0,
    marginTop: 30,
    // marginLeft: 50,
    alignItems: 'center',
  },

  box1: {
    // flex: 3,
  },
  textStyle: {
    fontSize: 20,
  },
  imageStyle: {
    height: 200,
    width: 200,
    // left: 105,
    marginBottom: 40,
    alignItems: 'center',
    position: 'relative',
    top: 20,
  },

  buttonStyle1: {
    backgroundColor: '#F97777',
    height: 45,
    width: '70%',
    marginBottom: 20,
    //marginLeft: 100,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonStyle: {
    backgroundColor: '#F97777',
    height: 45,
    width: '70%',
    marginBottom: 10,
    //marginLeft: 147,
    borderRadius: 10,
    marginTop: 60,
    alignSelf: 'center',
  },
  buttonTextStyle: {
    fontSize: 25,
    marginTop: 5,
    textAlign: 'center',
    position: 'relative',
  },
});

export default Profilepage;
