import AsyncStorage from '@react-native-community/async-storage';
import {ToastAndroid} from 'react-native';

const setItem = async (key, item) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(item));
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
    ToastAndroid.show(e, ToastAndroid.SHORT);
  }
};
export {setItem, getItem, clearItem};
