import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IcHome, IcUser} from '../../../assets';

const BottomBarItem = ({value, history}) => {
  const icon =
    value === 'home' ? (
      <IcHome style={styles.bottomBarIcon} />
    ) : (
      <IcUser style={styles.bottomBarIcon} />
    );
  const a = value === 'home' ? '/' : '/profile';
  return (
    <TouchableOpacity
      style={styles.bottomBarItem}
      onPress={() => history.push(a)}>
      {icon}
      <Text style={styles.bottomBarText}>{value}</Text>
    </TouchableOpacity>
  );
};

export default BottomBarItem;

const styles = StyleSheet.create({
  bottomBarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    marginHorizontal: 60,
    width: 55,
    height: 55,
    borderRadius: 100 / 2,
  },
  bottomBarIcon: {
    width: '30%',
    height: '30%',
    color: 'yellow',
  },
  bottomBarText: {
    color: 'white',
  },
});
