import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BackButton} from 'react-router-native';
import {IcCalendar} from '../../../assets';
import mainStyle from '../../../utils/mainStyle';

const SemesterMenu = () => {
  return (
    <View style={mainStyle.container}>
      <View style={mainStyle.topbar}>
        <Text>topbar</Text>
      </View>
      <View style={styles.menu}>
        <View style={styles.mainMenu}>
          <View style={styles.menuItem}>
            <IcCalendar style={styles.menuIcon} />
            <Text>Jadwal Semester Ini</Text>
          </View>
          <View style={styles.menuItem}>
            <Text>Daftar Mata Kuliah</Text>
          </View>
        </View>
      </View>
      <BackButton />
    </View>
  );
};

export default SemesterMenu;

const styles = StyleSheet.create({
  menu: {height: 300, backgroundColor: 'yellow'},
  mainMenu: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  menuIcon: {
    height: 50,
    color: '#223',
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 20,
    padding: 5,
    margin: 20,
  },
});
