import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NativeRouter, Route, Link} from 'react-router-native';
import {ListSemester, ProfileMainPage} from '..';
import mainStyle from '../../../utils/mainStyle';

const index = () => {
  return (
    <NativeRouter>
      <View style={mainStyle.container}>
        <Route exact path="/" component={ListSemester} />
        <Route path="/profile" component={ProfileMainPage} />
        <View style={styles.bottomBar}>
          <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Home</Text>
          </Link>
          <Link to="/profile" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>About</Text>
          </Link>
        </View>
      </View>
    </NativeRouter>
  );
};

export default index;

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
