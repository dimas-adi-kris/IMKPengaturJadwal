import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
/**
 *
 * @param {string} label - string untuk label
 * @returns - return object text dan textInput
 */
const Input = ({
  label,
  onChangeText,
  textContentType,
  password,
  value,
  keyboardType,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.textInput}
        value={value}
        textContentType={textContentType}
        onChangeText={onChangeText}
        secureTextEntry={password}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {marginVertical: 10},
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 15,
    paddingHorizontal: 20,
    backgroundColor: '#EEE',
  },
});
