import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ProfileMenuItem = ({value, history}) => {
  return (
    <TouchableOpacity
      style={styles.profileMenuItem}
      onPress={() => {
        history.push('/profile/edit');
      }}>
      <Text>{value}</Text>
    </TouchableOpacity>
  );
};

export default ProfileMenuItem;

const styles = StyleSheet.create({
  profileMenuItem: {
    padding: 20,
    backgroundColor: '#EEE',
  },
});
