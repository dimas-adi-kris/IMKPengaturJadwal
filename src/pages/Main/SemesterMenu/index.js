import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BackButton, useLocation} from 'react-router-native';
import {IcCalendar, IcList} from '../../../assets';
import mainStyle from '../../../utils/mainStyle';

const SemesterMenu = ({history}) => {
  const data = useLocation().state;
  console.log(data);
  return (
    <View style={mainStyle.container}>
      <View style={mainStyle.topbar}>
        <Text style={mainStyle.topbarTitle}>Tahun Ajar</Text>
        <Text style={mainStyle.topbarTitle}>{data.tahunAjaran}</Text>
      </View>
      <View style={styles.menu}>
        <View style={styles.mainMenu}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => history.push({pathname: '/jadwal', state: data})}>
            <IcCalendar style={styles.menuIcon} />
            <Text style={styles.menuText}>Jadwal Semester Ini</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() =>
              history.push({pathname: '/daftar_mataKuliah', state: data})
            }>
            <IcList style={styles.menuIcon} />
            <Text style={styles.menuText}>Daftar Mata Kuliah</Text>
          </TouchableOpacity>
        </View>
      </View>
      <BackButton />
    </View>
  );
};

export default SemesterMenu;

const styles = StyleSheet.create({
  topbar: {
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  },
  menu: {
    height: 200,
    // backgroundColor: 'yellow',
  },
  mainMenu: {
    flex: 1,
    flexDirection: 'row',
    // margin: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  menuIcon: {
    height: 50,
    width: 50,
    marginHorizontal: 20,
    color: 'black',
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 20,
    padding: 20,
    margin: 20,
  },
  menuText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '800',
  },
});
