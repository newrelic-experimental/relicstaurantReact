import React from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import colors from '../config/colors';

const PaymentOption = ({ item, setOption, selectedOption }) => {
  const itIsSelected = item.name === selectedOption?.name;

  return (
    <TouchableWithoutFeedback onPress={() => setOption(item)}>
      <View style={[styles.wrapper, itIsSelected && styles.border]}>
        <Text style={styles.text}>{item.name}</Text>
        <Image source={item.iconUrl} style={styles.logo} resizeMode={'contain'} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  logo: {
    width: 70,
    height: 50,
  },
  text: {
    fontSize: 17,
    paddingLeft: 10,
    color: colors.secondary,
  },
  wrapper: {
    width: '96%',
    height: 60,
    marginHorizontal: '2%',
    marginVertical: 5,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.black,
    elevation: 5,
    shadowOffset: { height: 5, width: 5 },
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default PaymentOption;
