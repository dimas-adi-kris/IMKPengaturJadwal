import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import IcUnsri from './src/assets/lambang-unsri-png-3.svg';

const App = () => {
  // const [state, setstate] = useState('');
  console.log('object');
  return (
    <View style={style.container}>
      <Text style={style.text}>Hello World</Text>
      <IcUnsri width={100} height={100} />
      <TouchableOpacity onLongPress={() => console.log('tekan tahan')}>
        <Image
          source={{
            uri: 'https://storage.googleapis.com/mobitzdb.appspot.com/image/1634462359291_fkxh43vyy.jpg',
          }}
          style={style.imageDummy}
        />
      </TouchableOpacity>
    </View>
  );
};

export default App;
const style = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    textAlign: 'center',
  },
  imageDummy: {width: 100, height: 100},
});
