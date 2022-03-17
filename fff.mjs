import firestore from '@react-native-firebase/firestore';
firestore()
  .collection('MataKuliah')
  .orderBy('waktuMulai')
  .where('TahunAjaran', '==', '
  4BF81RylJRVDDgW986rO');
