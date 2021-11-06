// import React, {useState} from 'react';
// import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
// import {Button, Input} from '../../../components';

// const Register = () => {
//   const [form, setForm] = useState({
//     email: '',
//     password: '',
//     konfirmasiPassword: '',
//   });
//   return (
//     <SafeAreaView style={styles.page}>
//       <ScrollView style={styles.scroll}>
//         <Text style={styles.titleText}>Masuk</Text>
//         <View style={styles.loginArea}>
//           <Input
//             label="Email"
//             textContentType="emailAddress"
//             value={form.email}
//             onChangeText={value => {
//               setForm({...form, email: value});
//             }}
//           />
//           <Input
//             label="Password"
//             textContentType="password"
//             password
//             value={form.password}
//             onChangeText={value => {
//               // setForm('password', value);
//               setForm({...form, password: value});
//             }}
//           />
//           <Input
//             label="Konfirmasi Password"
//             textContentType="password"
//             password
//             value={form.konfirmasiPassword}
//             onChangeText={value => {
//               // setForm('password', value);
//               setForm({...form, konfirmasiPassword: value});
//             }}
//           />
//           <Button
//             text="Register"
//             onPress={() => {
//               console.log(form.email, form.password, form.konfirmasiPassword);
//             }}
//           />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default Register;

// const styles = StyleSheet.create({
//   page: {
//     padding: 50,
//     backgroundColor: '#FBFF00',
//     flex: 1,
//   },
//   scroll: {
//     flex: 1,
//     backgroundColor: 'red',
//   },
//   titleText: {
//     flex: 1,
//     fontSize: 80,
//     marginTop: 40,
//     color: 'black',
//     backgroundColor: 'pink',
//   },
//   loginArea: {
//     backgroundColor: '#DDD',
//     height: 350,
//   },
// });
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Input} from '../../../components';
import {ActivityIndicator} from 'react-native-paper';
import {setItem, getItem} from '../../../utils';

const Register = ({history}) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    konfirmasiPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getItem('auth').then(rs => {
      console.log(rs);
    });
  }, []);

  const regAct = () => {
    // ToastAndroid.show('tes', ToastAndroid.SHORT);
    setIsLoading(true);
    // console.log(form);
    // let akun = [];
    if (form.password === form.konfirmasiPassword) {
      let registerForm = {
        email: form.email,
        nama: form.email,
        password: form.password,
        role: 2,
      };
      firestore()
        .collection('Account')
        .add(registerForm)
        .then(res => {
          resAuth('', {isBerhasil: true, akun: registerForm});
        });
    } else {
      resAuth('Password tidak cocok', {isBerhasil: false});
    }
    // firestore()
    //   .collection('Account')
    //   .where('email', '==', form.email)
    //   .get()
    //   .then(snapshot => {
    //     if (!snapshot.empty) {
    //       snapshot.forEach(doc => {
    //         akun.push({id: doc.id, ...doc.data()});
    //       });
    //       akun = akun[0];
    //       akun.password === form.password
    //         ? resAuth('', {isBerhasil: true, akun: akun})
    //         : resAuth('Salah Password', {isBerhasil: false});
    //     } else {
    //       resAuth('akun tidak terdaftar', {isBerhasil: false});
    //     }
    //   })
    //   .catch(err => {
    //     resAuth(err, {isBerhasil: false});
    //   });
  };
  const resAuth = async (pesan, status) => {
    if (status.isBerhasil) {
      setItem('auth', status.akun).then(res => {
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
        <Input
          label="Password"
          textContentType="password"
          password
          value={form.konfirmasiPassword}
          onChangeText={value => {
            setForm({...form, konfirmasiPassword: value});
          }}
        />
        <Button text="Daftar" onPress={regAct} />
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => {
            // console.log(form);
            history.push('/login');
          }}>
          <Text>Sudah punya akun? Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

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
    height: 400,
  },
});
