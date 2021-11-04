import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {BackButton, useLocation} from 'react-router-native';
import SelectDropdown from 'react-native-select-dropdown';

import {Button, Input} from '../../../../components';
import mainStyle from '../../../../utils/mainStyle';
import {MKadd, MKdelete} from '../../../../utils/Model';
import {getItem, setItem} from '../../../../utils';

const MataKuliahAdd = ({history}) => {
  const mataKuliah = useLocation().mataKuliah;
  const tahunAjar = useLocation().tahunAjar;
  const isBaru = useLocation().sBaru;
  const btnTextTambah = tahunAjar.isBaru ? 'Tambah' : 'Update';
  const [formMk, setFormMk] = useState({
    nama: mataKuliah ? mataKuliah.nama : '',
    kodeMK: mataKuliah ? mataKuliah.kodeMK : '',
    hari: mataKuliah ? mataKuliah.hari : '',
    waktuMulai: mataKuliah ? mataKuliah.waktuMulai : '',
    waktuAkhir: mataKuliah ? mataKuliah.waktuAkhir : '',
    TahunAjaran: tahunAjar.id,
    id: mataKuliah ? mataKuliah.id : '',
  });
  useEffect(() => {
    getItem('auth').then(rt => {
      setDataPengguna(rt);
    });
  }, []);
  const justMahasiswa = () => {
    getItem('jadwalForMahasiswa').then(rt => {
      // console.log('before');
      // console.log(rt);
      rt.forEach(doc => {
        if (doc.id === formMk.id) {
          doc.nama = formMk.nama;
          doc.kodeMK = formMk.kodeMK;
          doc.hari = formMk.hari;
          doc.waktuMulai = formMk.waktuMulai;
          doc.waktuAkhir = formMk.waktuAkhir;
        }
      });
      // console.log('after');
      // console.log(rt);
      setItem('jadwalForMahasiswa', rt);
      history.push({pathname: '/jadwal', data: tahunAjar});
    });
  };
  const [dataPengguna, setDataPengguna] = useState({});
  useEffect(() => {
    getItem('auth').then(rt => {
      setDataPengguna(rt);
    });
  }, []);
  const title =
    mataKuliah !== undefined ? mataKuliah.nama : 'Tambah Mata Kuliah';
  const regMK = () => {
    MKadd(formMk);
    history.push({pathname: '/daftar_mataKuliah', tahunAjar: tahunAjar});
  };
  const hari = [
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    "Jum'at",
    'Sabtu',
    'Minggu',
  ];

  const onPress = () => {
    Alert.alert(
      'Hapus Mata Kuliah',
      'Apakah anda yakin ingin menghapus mata kuliah ' + formMk.nama,
      [
        {text: 'batal'},
        {
          text: 'Hapus',
          onPress: () => {
            MKdelete();
          },
        },
      ],
    );
  };
  const btnHapus = isBaru ? (
    <View />
  ) : (
    <Button text="Delete" act="danger" onPress={onPress} />
  );

  return (
    <View style={mainStyle.container}>
      <View style={mainStyle.topbar}>
        <Text style={mainStyle.topbarTitle}>{title}</Text>
      </View>
      <View>
        <Input
          label="Mata Kuliah"
          value={formMk.nama}
          onChangeText={value => {
            setFormMk({...formMk, nama: value});
          }}
        />
        <Input
          label="Kode MK"
          value={formMk.kodeMK}
          onChangeText={value => {
            setFormMk({...formMk, kodeMK: value});
          }}
        />
        <View>
          <Text style={styles.label}>Hari</Text>
          <SelectDropdown
            data={hari}
            onSelect={(selectedItem, index) => {
              // console.log(selectedItem, index);
              setFormMk({...formMk, hari: index});
            }}
            buttonStyle={styles.dropdown}
            defaultButtonText="Pilih Hari"
            defaultValueByIndex={formMk.hari}
          />
        </View>
        <View style={styles.waktu}>
          <View style={styles.waktuItem}>
            <Input
              label="Waktu Mulai"
              value={formMk.waktuMulai}
              placeholder="cth. 09:40"
              onChangeText={value => {
                setFormMk({...formMk, waktuMulai: value});
              }}
            />
          </View>
          <View style={styles.splitWaktu}>
            <Text>-</Text>
          </View>
          <View style={styles.waktuItem}>
            <Input
              label="Waktu Akhir"
              value={formMk.waktuAkhir}
              placeholder="cth. 10:40"
              onChangeText={value => {
                setFormMk({...formMk, waktuAkhir: value});
              }}
            />
          </View>
        </View>
        <Button
          text={btnTextTambah}
          onPress={() => {
            dataPengguna.role !== 3 ? regMK() : justMahasiswa();
          }}
        />
        {!tahunAjar.isBaru && btnHapus}
      </View>
      <BackButton />
    </View>
  );
};

export default MataKuliahAdd;

const styles = StyleSheet.create({
  waktu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  waktuItem: {
    width: '45%',
  },
  splitWaktu: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 15,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    width: '100%',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
});
