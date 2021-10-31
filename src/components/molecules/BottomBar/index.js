import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {BottomBarItem} from '../..';
import {IcHome, IcUser} from '../../../assets';

const BottomBar = ({history}) => {
  return (
    <View style={styles.bottomBar}>
      <BottomBarItem value="home" icon={IcHome} history={history} />
      <BottomBarItem value="profile" icon={IcHome} history={history} />
      {/* <TouchableOpacity style={styles.bottomBarItem}>
        <IcUser style={styles.bottomBarIcon} />
        <Text style={styles.bottomBarText}>Profile</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
