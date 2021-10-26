import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Login = () => {
  const [form, setForm] = useState({email: '', password: ''});
  return (
    <View>
      <Text>Masuk</Text>
      <View></View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
