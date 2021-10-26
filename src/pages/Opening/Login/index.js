import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../../../components/atoms/Button';
import Input from '../../../components/atoms/Input';

const Login = () => {
  const [form, setForm] = useState({email: '', password: ''});
  return (
    <View style={styles.page}>
      <Text style={styles.titleText}>Masuk</Text>
      <View style={styles.loginArea}>
        <Input
          label="Email"
          textContentType="emailAddress"
          value={form.email}
        />
        <Input
          label="Password"
          textContentType="password"
          password={true}
          value={form.password}
        />
        <Button text="Login" />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 50,
    backgroundColor: '#FBFF00',
    flex: 1,
  },
  titleText: {
    flex: 1,
    fontSize: 80,
    marginTop: 40,
    color: 'black',
  },
  loginArea: {
    // backgroundColor: '#DDD',
    height: 350,
  },
});
