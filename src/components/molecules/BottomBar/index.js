import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {BottomBarItem} from '../..';
import {IcHome, IcUser} from '../../../assets';

const BottomBar = () => {
  return (
    <View style={styles.bottomBar}>
      <BottomBarItem value="home" icon={IcHome} />
      <TouchableOpacity style={styles.bottomBarItem}>
        <IcUser style={styles.bottomBarIcon} />
        <Text style={styles.bottomBarText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
