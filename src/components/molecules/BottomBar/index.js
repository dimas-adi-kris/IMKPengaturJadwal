import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IcHome, IcUser} from '../../../assets';

const BottomBar = () => {
  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity
        style={styles.bottomBarItem}
        onPress={() => console.log('kaka')}>
        <IcHome style={styles.bottomBarIcon} />
        <Text style={styles.bottomBarText}>Home</Text>
      </TouchableOpacity>
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
  bottomBarText: {
    color: 'white',
  },
  bottomBarIcon: {
    width: '30%',
    height: '30%',
    color: 'yellow',
  },
});
