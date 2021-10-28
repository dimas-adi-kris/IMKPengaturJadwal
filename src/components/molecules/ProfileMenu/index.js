import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const ProfileMenu = () => {
  return (
    <View style={styles.profileMenu}>
      <TouchableOpacity style={styles.profileMenuItem}>
        <Text>Menu</Text>
      </TouchableOpacity>
      <View style={styles.line} />
    </View>
  );
};

export default ProfileMenu;

const styles = StyleSheet.create({
  profileMenuItem: {
    padding: 20,
    backgroundColor: 'white',
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
