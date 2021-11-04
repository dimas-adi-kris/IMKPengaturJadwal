import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IcPlus} from '../../../assets';

const FloatingButton = ({history, pathname, dataPassHistory}) => {
  return (
    <TouchableOpacity
      style={styles.fabItem}
      onPress={() =>
        history.push({
          pathname: pathname,
          tahunAjar: dataPassHistory,
        })
      }>
      <IcPlus style={styles.matakuliahIcon} />
    </TouchableOpacity>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  fabItem: {
    position: 'absolute',
    margin: 50,
    right: 0,
    bottom: 0,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  matakuliahIcon: {width: 30, height: 30, color: 'black'},
});
