import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {BackButton, useLocation} from 'react-router-native';
import {IcCalendar, IcList} from '../../../assets';
import {Button} from '../../../components';
import {getItem, setItem} from '../../../utils';
import mainStyle from '../../../utils/mainStyle';
import {TAdelete} from '../../../utils/Model';

const SemesterMenu = ({history}) => {
  const data = useLocation().state;
  const [isLoading, setIsLoading] = useState(false);
  const [dataPengguna, setDataPengguna] = useState({});
  useEffect(() => {
    getItem('auth').then(rt => {
      setDataPengguna(rt);
      if (rt.role === 3) {
        let storeJadwaldiTahunAjaran = [];
        firestore()
          .collection('MataKuliah')
          .orderBy('waktuMulai')
          .where('TahunAjaran', '==', data.id)
          .get()
          .then(docs => {
            docs.forEach(element => {
              storeJadwaldiTahunAjaran.push({
                id: element.id,
                ...element.data(),
              });
            });
            setItem('jadwalForMahasiswa', storeJadwaldiTahunAjaran);
          });
      }
    });
    // getItem('auth').then(rs=>{
    // })
  }, []);
  const hapusSemester = () => {
    Alert.alert(
      'Hapus Tahun Ajaran',
      'Apakah anda ingin menghapus Tahun ajaran ' + data.tahunAjaran,
      [
        {
          text: 'Batal',
        },
        {
          text: 'Hapus',
          onPress: () => {
            setIsLoading(true);
            TAdelete(data.id);
            setIsLoading(false);
            history.push('/main_menu');
          },
        },
      ],
    );
  };
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
            onPress={() =>
              history.push({pathname: '/jadwal', tahunAjar: data})
            }>
            <IcCalendar style={styles.menuIcon} />
            <Text style={styles.menuText}>Jadwal Semester</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() =>
              history.push({pathname: '/daftar_mataKuliah', tahunAjar: data})
            }>
            <IcList style={styles.menuIcon} />
            <Text style={styles.menuText}>Daftar Mata Kuliah</Text>
          </TouchableOpacity>
        </View>
        {isLoading && <ActivityIndicator size="large" />}
        {dataPengguna.role === 1 && (
          <View style={styles.mainMenu}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => history.push({pathname: '/jadwal', state: data})}>
              <IcCalendar style={styles.menuIcon} />
              <Text style={styles.menuText}> Edit Tahun Ajar </Text>
            </TouchableOpacity>
            {/* <View style={styles.menuItem} /> */}
          </View>
        )}
      </View>
      {dataPengguna.role === 1 && (
        <View style={{height: 100}}>
          <Button text="Hapus Semester" act="danger" onPress={hapusSemester} />
        </View>
      )}
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
    flex: 1,
    backgroundColor: 'white',
  },
  mainMenu: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    // marginHorizontal: 0,
  },
  menuIcon: {
    height: 50,
    width: 50,
    marginHorizontal: 20,
    color: 'black',
    flex: 1,
  },
  menuItem: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#AAA',
    borderRadius: 20,
    padding: 20,
    margin: 20,
    flexDirection: 'column',
  },
  menuText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '800',
    flexShrink: 1,
    // flexWrap: 'wrap',
  },
});
