import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ProfilePic} from '../../../../assets';
import {Button} from '../../../../components';
import {BottomBar, ProfileMenu} from '../../../../components/molecules';
import {clearItem, colors, getItem} from '../../../../utils';

const ProfileMainPage = ({history}) => {
  const [dataPengguna, setDataPengguna] = useState({});
  useEffect(() => {
    getItem('auth').then(res => {
      setDataPengguna(res);
    });
  }, []);
  return (
    <View style={styles.profile}>
      <View style={styles.profilePreview}>
        <Image source={ProfilePic} style={styles.avatar} />
        <Text style={styles.name}>{dataPengguna.nama}</Text>
      </View>
      <ProfileMenu history={history} />
      <View>
        <Button
          act="danger"
          text="Log Out"
          onPress={() => {
            clearItem();
            history.push({pathname: '/'});
          }}
        />
      </View>
      <BottomBar history={history} />
    </View>
  );
};

export default ProfileMainPage;

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
