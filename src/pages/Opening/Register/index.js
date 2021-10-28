import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Input} from '../../../components';

const Register = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    konfirmasiPassword: '',
  });
  return (
    <SafeAreaView style={styles.page}>
      <ScrollView style={styles.scroll}>
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
          <Input
            label="Konfirmasi Password"
            textContentType="password"
            password
            value={form.konfirmasiPassword}
            onChangeText={value => {
              // setForm('password', value);
              setForm({...form, konfirmasiPassword: value});
            }}
          />
          <Button
            text="Register"
            onPress={() => {
              console.log(form.email, form.password, form.konfirmasiPassword);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    padding: 50,
    backgroundColor: '#FBFF00',
    flex: 1,
  },
  scroll: {
    flex: 1,
    backgroundColor: 'red',
  },
  titleText: {
    flex: 1,
    fontSize: 80,
    marginTop: 40,
    color: 'black',
    backgroundColor: 'pink',
  },
  loginArea: {
    backgroundColor: '#DDD',
    height: 350,
  },
});
