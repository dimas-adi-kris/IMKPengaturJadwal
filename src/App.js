import React from 'react';
// import {StyleSheet} from 'react-native';
import Router from './Router';
import global from './global';
global;

const App = () => {
  console.log('render app');
  // <View style={styles.container}>
  //   <Text>lala</Text>
  // </View>
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
