import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value[key]);
  } catch (e) {
    console.error(e);
  }
};

export const getData = async (key, setData) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      setData(value);
    }
  } catch (e) {
    console.error(e);
  }
};
