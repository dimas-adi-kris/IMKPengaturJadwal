import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
/**
 *
 * @param {function} onPress - fungsi
 * @returns
 */
const Button = ({text, onPress, act}) => {
  return (
    <TouchableOpacity style={styles.button(act)} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: act => ({
    backgroundColor: act === 'danger' ? 'red' : 'blue',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 50,
    marginVertical: 20,
  }),
  text: {
    color: 'white',
  },
});
