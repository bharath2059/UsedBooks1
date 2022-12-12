import React from 'react';
import {useState} from 'react';
import {TextInput, StyleSheet, View, Pressable, Text} from 'react-native';

const Input = (props: any) => {
  const {config} = props;
  const [type, setType] = React.useState(config.type);
  const switchPasswordMode = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer]}>
        <TextInput
          style={styles.inputField}
          placeholder={config.placeholder}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType={config.textContentType}
          autoComplete={config.autoComplete}
          secureTextEntry={type === 'password'}
          enablesReturnKeyAutomatically
          contextMenuHidden={config.type === 'password'}
          onChangeText={props.onChangeText}
          value={props.value}
        />
        {config.type === 'password' ? (
          <Pressable
            onPress={switchPasswordMode}
            style={styles.inputFieldButton}>
            <Text>{type === 'password' ? 'Show' : 'Hide'}</Text>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 25,
    width: '100%',
  },
  inputContainer: {
    display: 'flex',
    width: '90%',

    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E8E8E8',
  },
  inputField: {
    padding: 15,
    fontSize: 15,
    width: '100%',
  },
  inputFieldButton: {
    position: 'absolute',
    right: 25,
  },
});
export default Input;
