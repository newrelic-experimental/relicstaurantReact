import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { addMeal } from '../cartStore/cartSlice';
import store from '../cartStore/store';
import colors from '../config/colors';
import AppButton from './Button';

const MenuItem = ({ item, id }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.nameAndPrice}>
        <Text style={styles.mealName}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <AppButton
        title="Add"
        width={80}
        color="secondary"
        onPress={() =>
          store.dispatch(addMeal({ restaurant: id, name: item.name, price: item.price }))
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mealName: {
    fontSize: 16,
    fontWeight: '500',
    paddingRight: 10,
    color: colors.secondary,
  },
  nameAndPrice: {
    width: '75%',
  },
  price: {
    color: colors.grey,
    fontSize: 15,
  },
  wrapper: {
    width: '96%',
    marginHorizontal: '2%',
    marginVertical: 5,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.black,
    elevation: 5,
    shadowOffset: { height: 5, width: 5 },
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default MenuItem;
