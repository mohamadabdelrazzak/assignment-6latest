/* eslint-disable prettier/prettier */
import {StyleSheet, View, Text, TextInput, } from 'react-native';
import React from 'react';



const InputBox = ({
    placeholder,
    onChangeText,
    onBlur,
    value,
    maxLength,
    secureTextEntry,
    keyboardType,
    touched,
    errors,
}) => {
  return (
    <View style={styles.mainContainer} >
      <TextInput 
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        maxLength={maxLength}
      />
      {touched && errors && <Text style={styles.errorMsg}>{errors}</Text>}
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  mainContainer: {
    height : 68,
  },
  textInput: {
    borderWidth: 1,
    width: 350,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  errorMsg: {
    color: 'red',
    paddingLeft: 5,
  },
});
