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
} from 'react-native';

const Search = ({navigation}) => {
  const [Title, setsearchbook] = useState('');
  return (
    <SafeAreaView style={styles.Wrapper}>
      <View style={styles.box1}>
        <Text style={styles.HeadingText}>Search Book</Text>
        <View style={styles.textInputStyle}>
          <TextInput
            style={styles.InputTextStyle}
            onChangeText={setsearchbook}
            value={Title}
            placeholder="Search Book Name"
          />
        </View>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate('SearchList');
          }}>
          <Text style={styles.buttonTextStyle}>Search</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    // marginBottom : 10,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#E8E8FF',
  },
  box1: {
    height: '50%',
    width: '100%',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    //backgroundColor : '#586B87',
    // marginRight : 10,
    marginBottom: 10,
    //marginLeft : 50,
    padding: 50,
  },
  textInputStyle: {
    height: 50,
    width: '90%',
    alignItems: 'center',
    // marginLeft : 185,
    backgroundColor: '#D9D9D9',
    marginBottom: 20,
  },
  InputTextStyle: {
    position: 'relative',
    top: 15,
    fontSize: 20,
  },
  buttonStyle: {
    backgroundColor: '#F97777',
    height: 65,
    width: '80%',
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 10,
    position: 'relative',
    top: 400,
  },
  buttonTextStyle: {
    fontSize: 30,
    textAlign: 'center',
    position: 'relative',
    top: 15,
  },
  HeadingText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});
export default Search;
