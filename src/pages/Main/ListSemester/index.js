import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {IcUnsri} from '../../../assets';
import {SemesterButton} from '../../../components/atoms';
// import {BottomBar} from '../../../components/molecules';
import mainStyle from '../../../utils/mainStyle';

const ListSemester = () => {
  console.log('load listSemester');
  return (
    <View style={styles.listSemester}>
      <View style={styles.topbar}>
        <Text>Topbar</Text>
        {/* <View>
          <IcUnsri style={styles.avatar} />
        </View> */}
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
        </ScrollView>
      </SafeAreaView>
      {/* <BottomBar /> */}
    </View>
  );
};

export default ListSemester;

const styles = StyleSheet.create({
  topbar: {
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
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
