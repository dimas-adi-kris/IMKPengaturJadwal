import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {StyleSheet, Text, ToastAndroid, View} from 'react-native';
import {Button, Input} from '../../../components';
import {ActivityIndicator} from 'react-native-paper';
import {setItem} from '../../../utils';

const Login = ({history}) => {
  const [form, setForm] = useState({email: '', password: ''});
  const [isLoading, setIsLoading] = useState(false);

  const loginAct = () => {
    // ToastAndroid.show('tes', ToastAndroid.SHORT);
    setIsLoading(true);
    let akun = [];
    firestore()
      .collection('Account')
      .where('email', '==', form.email)
      .get()
      .then(snapshot => {
        if (!snapshot.empty) {
          snapshot.forEach(doc => {
            akun.push({id: doc.id, ...doc.data()});
          });
          akun = akun[0];
          akun.password === form.password
            ? resAuth('', {isBerhasil: true, akun: akun})
            : resAuth('Salah Password', {isBerhasil: false});
        } else {
          resAuth('akun tidak terdaftar', {isBerhasil: false});
        }
      })
      .catch(err => {
        resAuth(err, {isBerhasil: false});
      });
  };
  const resAuth = async (pesan, status) => {
    if (status.isBerhasil) {
      console.log('berhasil login');
      console.log(status.akun);
      console.log('berhasil login');
      setItem('auth', status.akun).then(() => {
        history.push({pathname: '/main_menu'});
      });
    } else {
      ToastAndroid.show(pesan, ToastAndroid.SHORT);
    }
    setIsLoading(false);
  };
  return (
    <View style={styles.page}>
      <Text style={styles.titleText}>Masuk</Text>
      {isLoading && <ActivityIndicator size="large" color="#00ff00" />}
      <View style={styles.loginArea}>
        <Input
          label="Email"
          textContentType="emailAddress"
          value={form.email}
          keyboardType="email-address"
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
            setForm({...form, password: value});
          }}
        />
        <Button text="Login" onPress={loginAct} />
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
