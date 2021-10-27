import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {PicProfile} from '../../../assets';
import BottomBar from '../../../components/molecules/BottomBar';
import {colors} from '../../../utils';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.profilePreview}>
          <Image source={PicProfile} style={styles.avatar} />
          <Text style={styles.name}>Dimas</Text>
        </View>
        <View style={styles.profileMenu}>
          <TouchableOpacity style={styles.profileMenuItem}>
            <Text>Menu</Text>
          </TouchableOpacity>
          <View style={styles.line} />
        </View>
      </View>
      <BottomBar />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  profile: {
    flex: 1,
    backgroundColor: 'red',
    paddingHorizontal: 20,
  },
  profilePreview: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  profileMenuItem: {
    padding: 20,
    backgroundColor: 'white',
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
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
