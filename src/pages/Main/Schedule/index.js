import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BackButton} from 'react-router-native';
import {IcLeftArrow, IcRightArrow} from '../../../assets';
import mainStyle from '../../../utils/mainStyle';

const Schedule = ({history}) => {
  return (
    <View style={mainStyle.container}>
      <View style={mainStyle.topbar}>
        <Text>Topbar</Text>
      </View>
      <View style={styles.dayNav}>
        <TouchableOpacity>
          <IcLeftArrow style={styles.arrow} />
        </TouchableOpacity>
        <Text style={styles.day}>Senin</Text>
        <TouchableOpacity>
          <IcRightArrow style={styles.arrow} />
        </TouchableOpacity>
      </View>
      <View style={styles.schedule}>
        <TouchableOpacity
          style={styles.scheduleItem}
          onPress={() => history.push('/')}>
          <Text>IMK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.scheduleItem}>
          <Text>CC</Text>
        </TouchableOpacity>
      </View>
      <BackButton />
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  dayNav: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  day: {color: 'black'},
  arrow: {
    flex: 1,
    width: '100',
    height: '100%',
    color: 'black',
  },
  schedule: {
    flex: 1,
    backgroundColor: 'pink',
  },
  scheduleItem: {
    height: 100,
    margin: 10,
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    backgroundColor: 'white',
  },
});
