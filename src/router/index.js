import React from 'react';
import {NativeRouter, Switch, Route} from 'react-router-native';
import {StyleSheet, View} from 'react-native';
import {
  ListSemester,
  MataKuliahAdd,
  MataKuliahPage,
  ProfileMainPage,
  ScheduleAdd,
  SchedulePage,
  SemesterMenu,
} from '../pages';

const Router = () => {
  return (
    <View style={styles.contain}>
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={ListSemester} />
          <Route path="/main_menu" component={ListSemester} />
          <Route
            path="/profile"
            component={props => (
              <ProfileMainPage {...props} desc="you did it! yeeyy" />
            )}
          />
          <Route
            path="/jadwal"
            component={props => <SchedulePage {...props} />}
          />
          <Route
            path="/tambah_semester"
            component={props => <ScheduleAdd {...props} />}
          />
          <Route
            path="/menu_semester"
            component={props => <SemesterMenu {...props} />}
          />
          <Route
            path="/daftar_mataKuliah"
            component={props => <MataKuliahPage {...props} />}
          />
          <Route
            path="/tambah_mataKuliah"
            component={props => <MataKuliahAdd {...props} />}
          />
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
