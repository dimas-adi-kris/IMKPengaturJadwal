import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const SemesterButton = ({value, history, sBaru, data}) => {
  const r = sBaru === true ? '/tambah_semester' : '/menu_semester';
  return (
    <TouchableOpacity
      style={styles.semester}
      onPress={() => history.push({pathname: r, state: data})}>
      <Text style={styles.semesterText}>{value}</Text>
    </TouchableOpacity>
  );
};

export default SemesterButton;

const styles = StyleSheet.create({
  semester: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#888',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    backgroundColor: 'yellow',
    marginVertical: 10,
  },
  semesterText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
