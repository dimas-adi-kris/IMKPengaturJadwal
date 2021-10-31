import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomBarItem} from '../..';

const BottomBar = ({history}) => {
  return (
    <View style={styles.bottomBar}>
      <BottomBarItem value="home" history={history} />
      <BottomBarItem value="profile" history={history} />
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
