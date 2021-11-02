import AsyncStorage from '@react-native-community/async-storage';

const setItem = async (key, item) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    return e;
  }
};

const getItem = async key => {
  try {
    const get = await AsyncStorage.getItem(key);
    if (get !== null) {
      return JSON.parse(get);
    }
  } catch (err) {
    return err;
  }
};

const clearItem = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e);
  }
};
export {setItem, getItem, clearItem};
