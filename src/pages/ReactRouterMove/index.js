import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {BackButton} from 'react-router-native';

const ReactRouterMove = ({history, desc}) => {
  return (
    <View>
      <Text>Try to change into only this page</Text>
      <Text>{desc}</Text>
      <Button title="click" onPress={() => history.push('/')} />
      <BackButton />
    </View>
  );
};

export default ReactRouterMove;

const styles = StyleSheet.create({});
