import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {BackButton, useLocation} from 'react-router-native';
import mainStyle from '../../../../utils/mainStyle';
import {IcPencil, IcPlus} from '../../../../assets/icons/outline';

const MataKuliahPage = ({history}) => {
  const data = useLocation().state;
  const [mataKuliah, setMataKuliah] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    let mounted = true;
    firestore()
      .collection('MataKuliah')
      .where('TahunAjaran', '==', data.id)
      .get()
      .then(snapshot => {
        setMataKuliah([]);
        snapshot.forEach(doc => {
          setMataKuliah(oldArray => [...oldArray, {id: doc.id, ...doc.data()}]);
        });
        if (mounted) {
          setloading(false);
        }
      });
    return function cleanup() {
      mounted = false;
    };
  }, []);
  return (
    <View style={mainStyle.container}>
      <View style={mainStyle.topbar}>
        <Text style={mainStyle.topbarTitle}>Mata Kuliah pada Tahun Ajar</Text>
        <Text style={mainStyle.topbarTitle}>{data.tahunAjaran}</Text>
      </View>
      <SafeAreaView style={styles.matakuliah}>
        <ScrollView>
          {/* Tambah MK */}
          <TouchableOpacity
            style={styles.mataKuliahItem}
            onPress={() =>
              history.push({
                pathname: '/tambah_mataKuliah',
                state: data,
                sBaru: true,
              })
            }>
            <IcPlus style={styles.matakuliahIcon} />
            <Text style={styles.mataKuliahText}>Tambah Mata kuliah</Text>
          </TouchableOpacity>
          {/* end Tambah MK */}
          {/* Daftar MK */}
          {loading ? (
            <View style={styles.mataKuliahItem}>
              <Text style={styles.mataKuliahText}>Loading...</Text>
            </View>
          ) : (
            mataKuliah.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.mataKuliahItem}
                  onPress={() =>
                    history.push({pathname: '/tambah_mataKuliah', state: item})
                  }>
                  <IcPencil style={styles.matakuliahIcon} />
                  <Text style={styles.mataKuliahText}>{item.mataKuliah}</Text>
                </TouchableOpacity>
              );
            })
          )}
          {/* end Daftar MK */}
        </ScrollView>
      </SafeAreaView>
      <BackButton />
    </View>
  );
};

export default MataKuliahPage;

const styles = StyleSheet.create({
  matakuliah: {
    flex: 1,
    marginHorizontal: 20,
  },
  mataKuliahItem: {
    borderRadius: 20,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    marginVertical: 10,
  },
  matakuliahIcon: {width: 30, height: 30, color: 'black'},
  mataKuliahText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
});
