import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {
  BackHandler,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import {SemesterButton} from '../../../components/atoms';
import {BottomBar} from '../../../components/molecules';
import mainStyle from '../../../utils/mainStyle';
import {getItem} from '../../../utils';
const ListSemester = ({history}) => {
  // console.log('load listSemester');

  const [tahunAjaran, setTahunAjaran] = useState([]);
  const [loading, setloading] = useState(true);
  const [dataPengguna, setDataPengguna] = useState({});
  const backAction = () => {
    ToastAndroid.show('BackButton Pressed', ToastAndroid.SHORT);
    BackHandler.exitApp();
    return true;
  };
  useEffect(() => {
    getItem('auth').then(res => {
      console.log(res);
      console.log('data');
      // console.log(res);
      console.log('data.akun');
      setDataPengguna(res);
    });
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);
  useEffect(() => {
    let mounted = true;
    // setDataPengguna(getItem('auth'));
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
        if (mounted) {
          setloading(false);
        }
      });
    console.log(dataPengguna);
    return function cleanup() {
      mounted = false;
    };
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
          {dataPengguna.role === 1 && (
            <SemesterButton value="Semester Baru" sBaru history={history} />
          )}

          {loading ? (
            <SemesterButton key={111111} value="Loading..." />
          ) : (
            tahunAjaran.map((item, index) => {
              return (
                <SemesterButton
                  key={index}
                  value={item.tahunAjaran}
                  history={history}
                  data={item}
                />
              );
            })
          )}
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
    // backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
