import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import IcUnsri from './src/assets/lambang-unsri-png-3.svg';

const App = () => {
  // const [state, setstate] = useState('');
  const stt = 'ReSchedule';
  console.log();
  // const [button, setButton] = useState(0);
  const [appTitle, setAppTitle] = useState('ReSchedule');
  const onPressButton = () => {
    console.log(appTitle);
    setAppTitle('yang lain');
  };
  return (
    <View style={style.container}>
      {/* <Text style={style.text}>Hello World</Text> */}
      <Button title="tekan" style={style.btn} onPress={onPressButton} />
      <View style={style.containerPic}>
        <IcUnsri style={style.unsri} />
        <Text style={style.appTitle}>{appTitle}</Text>
        <Text style={style.appTitle}>Fakultas Ilmu Komputer</Text>
        <Text style={style.appTitle}>Universitas Sriwijaya</Text>
      </View>
      {/* <TouchableOpacity onLongPress={() => console.log('tekan tahan')}>
        <Image
          source={{
            uri: 'https://storage.googleapis.com/mobitzdb.appspot.com/image/1634462359291_fkxh43vyy.jpg',
          }}
          style={style.imageDummy}
        />
      </TouchableOpacity> */}
    </View>
  );
};

export default App;
const style = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'column',
    flex: 1,
  },
  containerPic: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appTitle: {
    margin: 10,
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
