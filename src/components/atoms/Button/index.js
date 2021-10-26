import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({text}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 50,
    marginVertical: 20,
  },
  text: {
    color: 'white',
  },
});
