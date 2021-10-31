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

export {TAadd, TAget, TAgetOne};
