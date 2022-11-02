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

const CreateAdPage = () => {
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [Price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [Author, setAuthor] = useState('');
  const [Contact, setContact] = useState('');
  return (
    <SafeAreaView style={styles.Wrapper}>
      <View>
        <View style={styles.box1}>
          <Text style={styles.HeadingText}>Post Your ad</Text>
          <View style={styles.textInputStyle}>
            <Text
              style={styles.InputTextStyle}
              onPress={() => {
                alert('Select Photo');
              }}>
              Click Here to Add Image of the book
            </Text>
          </View>
          <View style={styles.textInputStyle}>
            <TextInput
              style={styles.InputTextStyle}
              onChangeText={setTitle}
              value={Title}
              placeholder="Enter the title of the book"
            />
          </View>
          <View style={styles.textInputStyle}>
            <TextInput
              style={styles.InputTextStyle}
              onChangeText={setDescription}
              value={Description}
              placeholder="Description"
            />
          </View>
          <View style={styles.textInputStyle}>
            <TextInput
              style={styles.InputTextStyle}
              onChangeText={setPrice}
              value={Price}
              placeholder="Enter the price in CAD"
            />
          </View>
          <View style={styles.textInputStyle}>
            <TextInput
              style={styles.InputTextStyle}
              onChangeText={setAuthor}
              value={Author}
              placeholder="Author"
            />
          </View>
          <View style={styles.textInputStyle}>
            <TextInput
              style={styles.InputTextStyle}
              onChangeText={setLocation}
              value={location}
              placeholder="Location to meet"
            />
          </View>
          <View style={styles.textInputStyle}>
            <TextInput
              style={styles.InputTextStyle}
              onChangeText={setContact}
              value={Contact}
              placeholder="Enter your contact details"
            />
          </View>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              alert('Your Ad is posted Succesfully');
            }}>
            <Text style={styles.buttonTextStyle}>PostAd</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#E8E8FF',
    marginTop: 20,
  },
  box1: {
    flex: 3,
    justifyContent: 'space-evenly',
  },
  textInputStyle: {
    height: 50,
    width: '100%',
    backgroundColor: '#D9D9D9',
    marginBottom: 20,
    borderRadius: 20,
  },
  InputTextStyle: {
    position: 'relative',
    top: 15,
    fontSize: 20,
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: '#F97777',
    height: 65,
    width: '80%',
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 10,
    position: 'relative',
    right: 10,
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
  },
  /* box3 : {
        height :70,
        width : '100%',
        backgroundColor : '#595959',
        flex : 0.3,
        flexDirection : 'row',
        
    },*/
  imageStyle: {
    height: 100,
    Width: 300,
    backgroundColor: '#D9D9D9',
    marginBottom: 20,
    borderRadius: 20,
  },
});
export default CreateAdPage;
