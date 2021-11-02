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
import {FloatingButton} from '../../../../components';
import {getItem} from '../../../../utils';

const MataKuliahPage = ({history}) => {
  const data = useLocation().tahunAjar;
  const [dataPengguna, setDataPengguna] = useState({});
  const [mataKuliah, setMataKuliah] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getItem('auth').then(res => {
      setDataPengguna(res);
    });
  }, []);
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

  console.log(dataPengguna);

  return (
    <View style={mainStyle.container}>
      <View style={mainStyle.topbar}>
        <Text style={mainStyle.topbarTitle}>Mata Kuliah pada Tahun Ajar</Text>
        <Text style={mainStyle.topbarTitle}>{data.tahunAjaran}</Text>
      </View>

      <SafeAreaView style={styles.matakuliah}>
        <ScrollView>
          {/* Tambah MK */}
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
                    history.push({
                      pathname: '/tambah_mataKuliah',
                      mataKuliah: item,
                      tahunAjar: data,
                    })
                  }>
                  <IcPencil style={styles.matakuliahIcon} />
                  <Text style={styles.mataKuliahText}>{item.nama}</Text>
                </TouchableOpacity>
              );
            })
          )}
          {/* end Daftar MK */}
        </ScrollView>
      </SafeAreaView>
      {dataPengguna.role === 1 && (
        <FloatingButton
          history={history}
          pathname="/tambah_mataKuliah"
          dataPassHistory={{isBaru: true, ...data}}
        />
      )}

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
  tambahMataKuliah: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ee6e73',
    position: 'absolute',
    bottom: 10,
    right: 10,
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
  fab: {},
});
