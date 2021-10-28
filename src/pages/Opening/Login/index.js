import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Input} from '../../../components';

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
          onChangeText={value => {
            setForm({...form, email: value});
          }}
        />
        <Input
          label="Password"
          textContentType="password"
          password
          value={form.password}
          onChangeText={value => {
            // setForm('password', value);
            setForm({...form, password: value});
          }}
        />
        <Button
          text="Login"
          onPress={() => {
            console.log(form.email, form.password);
          }}
        />
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
