import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SemesterButton} from '../../../components/atoms';
import {BottomBar} from '../../../components/molecules';
import mainStyle from '../../../utils/mainStyle';
const ListSemester = ({history}) => {
  console.log('load listSemester');
  global.foo = 'foo terganti';

  const [tahunAjaran, setTahunAjaran] = useState([]);
  useEffect(() => {
    firestore()
      .collection('TahunAjaran')
      .orderBy('tahunAjaran', 'desc')
      .get()
      .then(snapshot => {
        setTahunAjaran([]);
        snapshot.forEach(doc => {
          setTahunAjaran(oldArray => [
            ...oldArray,
            {id: doc.id, ...doc.data()},
          ]);
        });
      });
  }, []);
  return (
    <View style={mainStyle.container}>
      <View style={mainStyle.topbar}>
        <Text>Topbar</Text>
        {/* <View>
          <IcUnsri style={styles.avatar} />
        </View> */}
      </View>
      <SafeAreaView style={styles.listSemester}>
        <ScrollView style={styles.scrollView}>
          <SemesterButton value="Semester Baru" sBaru history={history} />
          {tahunAjaran.map((item, index) => {
            return (
              <SemesterButton
                key={index}
                value={item.tahunAjaran}
                history={history}
                data={item}
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
      <BottomBar history={history} />
    </View>
  );
};

export default ListSemester;

const styles = StyleSheet.create({
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
