import firestore from '@react-native-firebase/firestore';

const TAadd = req => {
  firestore().collection('TahunAjaran').add(req);
};
const TAget = async () => {
  let gets = [];
  const data = await firestore().collection('TahunAjaran').get();
  data.forEach(d => {
    gets.push({id: d.id, ...d.data()});
  });
  return gets;
};
const TAgetOne = async id => {
  const gets = await firestore().collection('TahunAjaran').doc(id).get();
  return {id: gets.id, ...gets.data()};
};

/**
 *
 * @param {string} idTahunAjar - id tahun ajar
 * @returns tidak ada return. hanya menghapus semua MK yang ada di semester tersebut dan menghapus semester tersebut
 */
const TAdelete = async idTahunAjar => {
  const get = await firestore()
    .collection('MataKuliah')
    .where('TahunAjaran', '==', idTahunAjar)
    .get();
  get.forEach(async element => {
    await firestore().collection('MataKuliah').doc(element.id).delete();
  });
  await firestore().collection('TahunAjaran').doc(idTahunAjar).delete();
};

export {TAadd, TAget, TAgetOne, TAdelete};
