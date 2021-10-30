import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NativeRouter, Switch, Route} from 'react-router-native';

const ReactRouter = ({history}) => {
  return (
    <View style={styles.cont}>
      <Text>lalala</Text>
      <Button title="click" onPress={() => history.push('/reactMove')} />
    </View>
  );
};

export default ReactRouter;

const styles = StyleSheet.create({cont: {flex: 1}});
