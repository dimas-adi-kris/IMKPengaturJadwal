import firestore from '@react-native-firebase/firestore';

const MKadd = ({
  TahunAjaran,
  hari,
  id,
  kodeMK,
  nama,
  waktuAkhir,
  waktuMulai,
}) => {
  id === ''
    ? firestore()
        .collection('MataKuliah')
        .add({TahunAjaran, hari, kodeMK, nama, waktuAkhir, waktuMulai})
    : firestore()
        .collection('MataKuliah')
        .doc(id)
        .update({TahunAjaran, hari, kodeMK, nama, waktuAkhir, waktuMulai});
};
export {MKadd};
