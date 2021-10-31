import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BackButton, useLocation} from 'react-router-native';
import SelectDropdown from 'react-native-select-dropdown';

import {Button, Input} from '../../../../components';
import mainStyle from '../../../../utils/mainStyle';
import {MKadd} from '../../../../utils/Model';

const MataKuliahAdd = ({history}) => {
  const data = useLocation().state;
  const [formMk, setFormMk] = useState({
    mataKuliah: '',
    kodeMK: '',
    hari: '',
    waktuMulai: '',
    waktuAkhir: '',
    TahunAjaran: data.id,
  });
  console.log(data);
  const title =
    data.mataKuliah !== undefined ? data.mataKuliah : 'Tambah Mata Kuliah';
  const regMK = () => {
    MKadd(formMk);
    history.push({pathname: '/daftar_mataKuliah', state: data});
  };
  const hari = [
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    `Jum'at`,
    'Sabtu',
    'Minggu',
  ];
  return (
    <View style={mainStyle.container}>
      <View style={mainStyle.topbar}>
        <Text style={mainStyle.topbarTitle}>{title}</Text>
      </View>
      <View>
        <Input
          label="Mata Kuliah"
          value={formMk.mataKuliah}
          onChangeText={value => {
            setFormMk({...formMk, mataKuliah: value});
          }}
        />
        <Input
          label="Kode MK"
          value={formMk.kodeMK}
          onChangeText={value => {
            setFormMk({...formMk, kodeMK: value});
          }}
        />
        {/* <Input
          label="Hari"
          value={formMk.hari}
          onChangeText={value => {
            setFormMk({...formMk, hari: value});
          }}
        /> */}
        <View>
          <Text style={styles.label}>Hari</Text>
          <SelectDropdown
            data={hari}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              setFormMk({...formMk, hari: index});
            }}
            buttonStyle={styles.dropdown}
            defaultButtonText="Pilih Hari"
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
          text="Tambah"
          onPress={() => {
            regMK();
            console.log(formMk);
          }}
        />
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
