import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {BottomBar, SemesterButton} from '../../../components';
import {IcUnsri} from '../../../assets/index';

const ListSemester = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Text>Topbar</Text>
        <View>
          <IcUnsri style={styles.avatar} />
        </View>
      </View>
      <SafeAreaView style={styles.listSemester}>
        <ScrollView style={styles.scrollView}>
          <SemesterButton value="Semester 7" />
          <SemesterButton value="Semester 6" />
          <SemesterButton value="Semester 5" />
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          {/*
           */}
        </ScrollView>
      </SafeAreaView>
      <BottomBar />
    </View>
  );
};

export default ListSemester;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  topbar: {
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageProfile: {
    width: '10%',
    height: 50,
    // borderRadius: 80,
    backgroundColor: 'yellow',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    backgroundColor: 'blue',
  },
  listSemester: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
