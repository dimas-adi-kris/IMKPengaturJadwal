import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BackButton} from 'react-router-native';
import mainStyle from '../../../../utils/mainStyle';
import {Button, Input} from '../../../../components';
import {TAadd} from '../../../../utils/Model';

const ScheduleAdd = ({history}) => {
  console.log(global.foo);
  const [form, setForm] = useState({tahunAjaran: ''});
  const regSemester = () => {
    TAadd(form);
    history.push('/');
  };
  return (
    <View style={mainStyle.container}>
      <View style={styles.topbar}>
        <Text style={styles.topbarText}>Tambah Semester</Text>
      </View>
      <View style={styles.addSemester}>
        <Input
          value={form.tahunAjaran}
          label="Tahun Ajaran"
          onChangeText={value => {
            setForm({...form, tahunAjaran: value});
          }}
        />
        <Button
          text="Tambah Semester"
          keyboardType="numberic"
          onPress={() => regSemester(history)}
        />
      </View>
      <BackButton />
    </View>
  );
};
export default ScheduleAdd;

const styles = StyleSheet.create({
  addSemester: {
    flex: 1,
    paddingVertical: 20,
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  topbarText: {
    fontSize: 30,
  },
});
