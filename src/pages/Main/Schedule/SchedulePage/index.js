import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
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
            setloading(true);
            setWhatDay(whatDay + 1);
          }}>
          <IcRightArrow style={styles.arrow} />
        </TouchableOpacity>
      </>
    ) : whatDay === hari.length ? (
      <>
        <TouchableOpacity
          onPress={() => {
            setloading(true);
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
            setloading(true);
            setWhatDay(whatDay - 1);
          }}>
          <IcLeftArrow style={styles.arrow} />
        </TouchableOpacity>
        <Text style={styles.day}>{hari[whatDay]}</Text>
        <TouchableOpacity
          onPress={() => {
            setloading(true);
            setWhatDay(whatDay + 1);
          }}>
          <IcRightArrow style={styles.arrow} />
        </TouchableOpacity>
      </>
    );

  useEffect(() => {
    let mounted = true;
    const jadwalDiProses = async () => {
      let brandNewJadwal = [];
      let getData = await firestore()
        .collection('MataKuliah')
        .orderBy('waktuMulai')
        .where('TahunAjaran', '==', data.id)
        .where('hari', '==', whatDay)
        .get();
      setJadwal([]);
      getData.forEach(doc => {
        brandNewJadwal.push({id: doc.id, ...doc.data()});
      });
      for (let i = 0; i < brandNewJadwal.length; i++) {
        for (let j = 0; j < brandNewJadwal.length; j++) {
          // const waktuAkhirI =
          //   Number(brandNewJadwal[i].waktuAkhir.split(':')[0]) * 60 +
          //   Number(brandNewJadwal[i].waktuAkhir.split(':')[1]);
          const waktuMulaiI =
            Number(brandNewJadwal[i].waktuMulai.split(':')[0]) * 60 +
            Number(brandNewJadwal[i].waktuMulai.split(':')[1]);
          const waktuAkhirJ =
            Number(brandNewJadwal[j].waktuAkhir.split(':')[0]) * 60 +
            Number(brandNewJadwal[j].waktuAkhir.split(':')[1]);
          const waktuMulaiJ =
            Number(brandNewJadwal[j].waktuMulai.split(':')[0]) * 60 +
            Number(brandNewJadwal[j].waktuMulai.split(':')[1]);
          // if (brandNewJadwal[i].hari === whatDay && brandNewJadwal[j].hari === whatDay) {
          if (waktuMulaiI > waktuMulaiJ && waktuMulaiI < waktuAkhirJ) {
            brandNewJadwal[i].isCrash =
              brandNewJadwal[i].hari === whatDay && true;
            brandNewJadwal[j].isCrash =
              brandNewJadwal[j].hari === whatDay && true;
          }
          // }
        }
      }
      setJadwal(brandNewJadwal);
    };
    jadwalDiProses();
    if (mounted) {
      setloading(false);
    }
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
      <SafeAreaView style={styles.schedule}>
        <ScrollView>
          {loading ? (
            <TouchableOpacity style={styles.scheduleItem('#FFECEC')}>
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
                    history.push({
                      pathname: '/tambah_mataKuliah',
                      mataKuliah: item,
                      data: data,
                    })
                  }>
                  <Text
                    style={styles.scheduleText(
                      item.isCrash ? 'white' : 'black',
                    )}>
                    {item.nama}
                  </Text>
                  <Text
                    style={styles.scheduleText(
                      item.isCrash ? 'white' : 'black',
                    )}>
                    {item.waktuMulai} - {item.waktuAkhir}
                  </Text>
                  <Text
                    style={styles.scheduleText(
                      item.isCrash ? 'white' : 'black',
                    )}>
                    {item.kodeMK}
                  </Text>
                </TouchableOpacity>
              );
            })
          )}
        </ScrollView>
      </SafeAreaView>
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
  scheduleText: color => ({
    color: color,
  }),
});
