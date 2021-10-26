import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Input = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.textInput} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#000',
  },
});
