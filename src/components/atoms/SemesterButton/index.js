import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const SemesterButton = ({value, history, sBaru}) => {
  sBaru === true ? console.log('sBaru') : console.log('sLamo');
  return (
    <TouchableOpacity
      style={styles.semester}
      onPress={() => history.push('/jadwal')}>
      <Text style={styles.semesterText}>{value}</Text>
    </TouchableOpacity>
  );
};

export default SemesterButton;

const styles = StyleSheet.create({
  semester: {
    borderRadius: 20,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    marginVertical: 10,
  },
  semesterText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
