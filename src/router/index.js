import React from 'react';
import {NativeRouter, Switch, Route} from 'react-router-native';
import {StyleSheet, View} from 'react-native';
import {
  ListSemester,
  Login,
  MataKuliahAdd,
  MataKuliahPage,
  ProfileMainPage,
  ScheduleAdd,
  SchedulePage,
  SemesterMenu,
  Splash,
} from '../pages';
import ProfileEdit from '../pages/Main/ProfilePage/ProfileEdit';

const Router = () => {
  return (
    <View style={styles.contain}>
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/main_menu" component={ListSemester} />
          <Route
            exact
            path="/profile"
            component={props => <ProfileMainPage {...props} />}
          />
          <Route
            exact
            path="/profile/edit"
            component={props => <ProfileEdit {...props} />}
          />
          <Route
            exact
            path="/jadwal"
            component={props => <SchedulePage {...props} />}
          />
          <Route
            exact
            path="/tambah_semester"
            component={props => <ScheduleAdd {...props} />}
          />
          <Route
            exact
            path="/menu_semester"
            component={props => <SemesterMenu {...props} />}
          />
          <Route
            exact
            path="/daftar_mataKuliah"
            component={props => <MataKuliahPage {...props} />}
          />
          <Route
            exact
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
