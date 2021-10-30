import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Router from './Router';

const App = () => {
  console.log('render app');
  return (
    <>
      <Router />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
