import firestore from '@react-native-firebase/firestore';

const MKadd = req => {
  firestore().collection('MataKuliah').add(req);
};
export {MKadd};
