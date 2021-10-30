import React from 'react';
import {NativeRouter, Switch, Route} from 'react-router-native';
import {StyleSheet, Text, View} from 'react-native';
import {ListSemester, ProfileMainPage, Schedule} from '../pages';

const Router = () => {
  return (
    <View style={styles.contain}>
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={ListSemester} />
          <Route
            path="/profile"
            component={props => (
              <ProfileMainPage {...props} desc="you did it! yeeyy" />
            )}
          />
          <Route path="/jadwal" component={props => <Schedule {...props} />} />
        </Switch>
      </NativeRouter>
    </View>
  );
};

export default Router;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
});
