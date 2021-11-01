import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BackButton, useLocation} from 'react-router-native';
import {IcLeftArrow, IcRightArrow} from '../../../../assets';
import mainStyle from '../../../../utils/mainStyle';

const SchedulePage = ({history}) => {
  const data = useLocation().state;
  const [jadwal, setJadwal] = useState([]);
  const [loading, setloading] = useState(true);
  const [whatDay, setWhatDay] = useState(0);

  const [hari, setHari] = useState([
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    "Jum'at",
    'Sabtu',
    'Minggu',
  ]);
  const elDay =
    whatDay === 0 ? (
      <>
        <View style={{width: 100}} />
        <Text style={styles.day}>{hari[whatDay]}</Text>
        <TouchableOpacity
          onPress={() => {
            setWhatDay(whatDay + 1);
          }}>
          <IcRightArrow style={styles.arrow} />
        </TouchableOpacity>
      </>
    ) : whatDay === hari.length ? (
      <>
        <TouchableOpacity
          onPress={() => {
            setWhatDay(whatDay - 1);
          }}>
          <IcLeftArrow style={styles.arrow} />
        </TouchableOpacity>
        <Text style={styles.day}>{hari[whatDay]}</Text>
        <View style={{width: 100}} />
      </>
    ) : (
      <>
        <TouchableOpacity
          onPress={() => {
            setWhatDay(whatDay - 1);
          }}>
          <IcLeftArrow style={styles.arrow} />
        </TouchableOpacity>
        <Text style={styles.day}>{hari[whatDay]}</Text>
        <TouchableOpacity
          onPress={() => {
            setWhatDay(whatDay + 1);
          }}>
          <IcRightArrow style={styles.arrow} />
        </TouchableOpacity>
      </>
    );
  // const [newArr, setNewArr] = useState([]);
  // const getIsCrash = arr => {
  //   arr.forEach(elem1 => {
  //     arr.forEach(elem2 => {
  //       if (
  //         elem1.waktuMulai > elem2.waktuMulai &&
  //         elem1.waktuMulai < elem2.waktuAkhir
  //       ) {
  //         console.log('elem1, elem2');
  //         console.log(elem1, elem2);
  //       }
  //     });
  //   });
  // };
  const [bcJadwal, setBcJadwal] = useState([]);
  useEffect(() => {
    let mounted = true;
    setJadwal([]);
    firestore()
      .collection('MataKuliah')
      .orderBy('waktuMulai')
      .where('TahunAjaran', '==', data.id)
      .where('hari', '==', whatDay)
      .get()
      .then(snapshot => {
        // setJadwal([]);
        // setNewArr([]);
        // setIsCrash([]);
        snapshot.forEach(doc => {
          setJadwal(oldArray => [
            ...oldArray,
            {
              id: doc.id,
              ...doc.data(),
            },
          ]);
        });
        console.log('==========Before===========');
        console.log(jadwal);
        // console.log(bcJadwal);
        // setBcJadwal(jadwal);
        // setJadwal([]);
        // console.log('==========After===========');
        // console.log(jadwal);
        // console.log(bcJadwal);
        for (let i = 0; i < jadwal.length; i++) {
          for (let j = 0; j < jadwal.length; j++) {
            // console.log('=====================');
            // const waktuAkhirI =
            //   Number(jadwal[i].waktuAkhir.split(':')[0]) * 60 +
            //   Number(jadwal[i].waktuAkhir.split(':')[1]);
            const waktuMulaiI =
              Number(jadwal[i].waktuMulai.split(':')[0]) * 60 +
              Number(jadwal[i].waktuMulai.split(':')[1]);
            const waktuAkhirJ =
              Number(jadwal[j].waktuAkhir.split(':')[0]) * 60 +
              Number(jadwal[j].waktuAkhir.split(':')[1]);
            const waktuMulaiJ =
              Number(jadwal[j].waktuMulai.split(':')[0]) * 60 +
              Number(jadwal[j].waktuMulai.split(':')[1]);
            // if (jadwal[i].hari === whatDay && jadwal[j].hari === whatDay) {
            if (waktuMulaiI > waktuMulaiJ && waktuMulaiI < waktuAkhirJ) {
              jadwal[i].isCrash = jadwal[i].hari === whatDay && true;
              jadwal[j].isCrash = jadwal[j].hari === whatDay && true;
              setJadwal([...jadwal]);
              console.log('Dapat di', i, j);
              console.log('Dapat di hari ke', whatDay);
            }
            // }
          }
        }
        console.log(jadwal);
        // console.log(whatDay);
        if (mounted) {
          setloading(false);
        }
      });
    return function cleanup() {
      mounted = false;
    };
  }, [whatDay]);
  return (
    <View style={mainStyle.container}>
      <View style={mainStyle.topbar}>
        <Text>Topbarasdasd</Text>
      </View>
      <View style={styles.dayNav}>{elDay}</View>
      <View style={styles.schedule}>
        {loading ? (
          <TouchableOpacity style={styles.scheduleItem}>
            <Text>Loading...</Text>
          </TouchableOpacity>
        ) : (
          jadwal.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.scheduleItem(
                  item.isCrash ? '#FF2020' : '#FFECEC',
                )}
                onPress={() =>
                  history.push({pathname: '/tambah_mataKuliah', state: item})
                }>
                <Text>{item.mataKuliah}</Text>
              </TouchableOpacity>
            );
          })
        )}
      </View>
      <BackButton />
    </View>
  );
};

export default SchedulePage;

const styles = StyleSheet.create({
  dayNav: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  day: {color: 'black'},
  arrow: {
    flex: 1,
    width: '100',
    height: '100%',
    color: 'black',
  },
  schedule: {
    flex: 1,
    backgroundColor: 'pink',
  },
  scheduleItem: color => ({
    height: 100,
    margin: 10,
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    backgroundColor: color,
  }),
});
