import React, {useEffect, useState} from 'react';
import {
  ToastAndroid,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BackButton} from 'react-router-native';
import {launchImageLibrary} from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
import {IcPencil, ProfilePic} from '../../../../assets';
import {Button, Input} from '../../../../components';
import {BottomBar, ProfileMenu} from '../../../../components/molecules';
import {clearItem, colors, getItem, setItem} from '../../../../utils';

const ProfileEdit = ({history}) => {
  const [dataPengguna, setDataPengguna] = useState({});
  const [photo, setPhoto] = useState(ProfilePic);
  const [form, setForm] = useState({
    nama: '',
  });
  useEffect(() => {
    getItem('auth').then(res => {
      setDataPengguna(res);
      setForm(res);
      res.photo ? setPhoto({uri: res.photo}) : setPhoto(ProfilePic);
    });
  }, []);
  const onChangeProfilePicture = () => {
    const options = {
      maxWidth: 500,
      maxHeight: 500,
      includeBase64: true,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        ToastAndroid.show('Foto belum dimasukkan');
      } else {
        const source = {
          uri: response.assets[0].uri,
          base64: `data:${response.assets[0].type};base64,${response.assets[0].base64}`,
        };
        setPhoto(source);
      }
    });
  };

  const onUpdate = () => {
    const data = form;
    if (photo.base64) {
      data.photo = photo.base64;
    }
    console.log(form.nama);
    firestore()
      .collection('Account')
      .doc(form.id)
      .update({
        ...data,
      })
      .then(() => {
        setItem('auth', data);
        history.push('/profile');
      })
      .catch(err => {
        ToastAndroid.show(err.message);
      });
  };
  const onChangeText = (key, value) => {
    setForm({
      ...form,
      [key]: value,
    });
  };
  return (
    <View style={styles.profile}>
      <View style={styles.profilePreview}>
        <TouchableOpacity
          onPress={onChangeProfilePicture}
          style={styles.container}>
          <View style={styles.avatarWrapper}>
            <Image source={photo} style={styles.avatar} />
            <IcPencil style={styles.icon} />
          </View>
        </TouchableOpacity>
        <Text style={styles.name}>{dataPengguna.nama}</Text>
      </View>
      <View>
        <Input
          label="Nama"
          onChangeText={value => {
            onChangeText('nama', value);
          }}
        />
      </View>
      <View style={{height: 200}}>
        <Button text="Simpan Profil" onPress={onUpdate} />
      </View>
      <BackButton />
    </View>
  );
};

export default ProfileEdit;

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#EEE',
  },
  profilePreview: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
  },
  avatarWrapper: {
    width: 110,
    height: 110,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  name: {
    fontSize: 24,
    color: colors.mainColors.dark[800],
    // colors.mainColors.dark[800],
    marginTop: 13,
  },
});
