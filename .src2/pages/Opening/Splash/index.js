import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IcUnsri} from '../../../assets';

const Splash = () => {
  console.log();
  // const [button, setButton] = useState(0);
  const [appTitle, setAppTitle] = useState('ReSchedule');
  return (
    <View style={style.container}>
      <View style={style.containerPic}>
        <IcUnsri style={style.unsri} />
        <Text style={style.appTitle}>{appTitle}</Text>
        <Text style={style.appTitle}>Fakultas Ilmu Komputer</Text>
        <Text style={style.appTitle}>Universitas Sriwijaya</Text>
      </View>
    </View>
  );
};

export default Splash;
const style = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'yellow',
  },
  containerPic: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appTitle: {
    margin: 10,
    fontSize: 20,
  },
  unsri: {width: '70%', height: '70%'},
  text: {
    textAlign: 'center',
  },
  imageDummy: {width: 100, height: 100},
  btn: {
    width: 58,
    height: 58,
    borderRadius: 19,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#e8e8e8',
    marginBottom: 5,
  },
});
