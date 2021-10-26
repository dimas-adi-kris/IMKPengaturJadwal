import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Input = ({label, textContentType, password, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.textInput}
        textContentType={textContentType}
        secureTextEntry={password}
        value={value}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {marginVertical: 10},
  label: {
    fontSize: 14,
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 15,
    paddingHorizontal: 20,
    backgroundColor: '#EEE',
  },
});
