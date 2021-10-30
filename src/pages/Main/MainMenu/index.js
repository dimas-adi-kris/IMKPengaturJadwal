import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NativeRouter, Route, Link} from 'react-router-native';
import {ListSemester, ProfileMainPage} from '..';
import {IcHome, IcUser} from '../../../assets';
import mainStyle from '../../../utils/mainStyle';

const index = () => {
  return (
    <NativeRouter>
      <View style={mainStyle.container}>
        <Route exact path="/" component={ListSemester} />
        <Route path="/profile" component={ProfileMainPage} />
        <View style={styles.bottomBar}>
          <Link to="/" underlayColor="#f0f4f7" style={styles.bottomBarItem}>
            <View>
              <IcHome style={styles.bottomBarIcon} />
              <Text style={styles.bottomBarText}>Home</Text>
            </View>
          </Link>
          <Link
            to="/profile"
            underlayColor="#f0f4f7"
            style={styles.bottomBarItem}>
            <View>
              <IcUser style={styles.bottomBarIcon} />
              <Text style={styles.bottomBarText}>Profile</Text>
            </View>
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
  bottomBarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    marginHorizontal: 60,
    width: 55,
    height: 55,
    borderRadius: 100 / 2,
  },
  bottomBarIcon: {
    width: '30%',
    height: '30%',
    color: 'yellow',
  },
  bottomBarText: {
    color: 'white',
  },
});
