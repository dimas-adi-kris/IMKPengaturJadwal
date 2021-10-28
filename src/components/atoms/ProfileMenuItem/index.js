import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ProfileMenuItem = ({value}) => {
  return (
    <TouchableOpacity style={styles.profileMenuItem}>
      <Text>{value}</Text>
    </TouchableOpacity>
  );
};

export default ProfileMenuItem;

const styles = StyleSheet.create({
  profileMenuItem: {
    padding: 20,
    backgroundColor: 'white',
  },
});
