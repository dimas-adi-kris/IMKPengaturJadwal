import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {BackButton, useLocation} from 'react-router-native';
import mainStyle from '../../../../utils/mainStyle';

const MataKuliahPage = ({history}) => {
  const data = useLocation().state;
  const [mataKuliah, setMataKuliah] = useState([]);
  useEffect(() => {
    firestore()
      .collection('MataKuliah')
      .where('TahunAjaran', '==', data.id)
      .get()
      .then(snapshot => {
        setMataKuliah([]);
        snapshot.forEach(doc => {
          setMataKuliah(oldArray => [...oldArray, {id: doc.id, ...doc.data()}]);
        });
      });
  });
  return (
    <View style={mainStyle.container}>
      <View style={mainStyle.topbar}>
        <Text style={mainStyle.topbarTitle}>Mata Kuliah pada Tahun Ajar</Text>
        <Text style={mainStyle.topbarTitle}>{data.tahunAjaran}</Text>
      </View>
      <View style={styles.matakuliah}>
        <TouchableOpacity
          style={styles.mataKuliahItem}
          onPress={() =>
            history.push({pathname: '/tambah_mataKuliah', state: data})
          }>
          <Text style={styles.mataKuliahText}>Tambah Mata kuliah</Text>
        </TouchableOpacity>
        {mataKuliah.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.mataKuliahItem}
              onPress={() =>
                history.push({pathname: '/tambah_mataKuliah', state: item})
              }>
              <Text style={styles.mataKuliahText}>{item.mataKuliah}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
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
