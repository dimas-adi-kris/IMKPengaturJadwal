import React from 'react';
import {StyleSheet, View} from 'react-native';
import ProfileMenuItem from '../../atoms/ProfileMenuItem';

const ProfileMenu = () => {
  return (
    <View style={styles.profileMenu}>
      <ProfileMenuItem value="Menu" />
      <View style={styles.line} />
      <ProfileMenuItem value="Setting" />
      <View style={styles.line} />
    </View>
  );
};

export default ProfileMenu;

const styles = StyleSheet.create({
  profileMenu: {flex: 1},
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
