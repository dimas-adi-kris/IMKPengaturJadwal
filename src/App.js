import React from 'react';
// import {StyleSheet} from 'react-native';
import Router from './Router';
import global from './global';
import {LogBox, View} from 'react-native';
import {Furqon} from './pages';
// import {Provider as PaperProvider} from 'react-native-paper';
global;

const App = () => {
  console.log('render app');
  LogBox.ignoreAllLogs();
  // <View style={styles.container}>
  //   <Text>lala</Text>
  // </View>
  // {/* <View>
  //   <Furqon />
  // </View> */}
  return (
    <>
      <Router />
    </>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'red',
//   },
// });
