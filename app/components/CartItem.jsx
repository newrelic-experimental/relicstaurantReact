import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { addMeal, removeMeal } from '../cartStore/cartSlice';
import colors from '../config/colors';
import { AntDesign } from '@expo/vector-icons';

const CartItem = ({ item, dispatch }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.description}>
        <Text style={styles.mealName}>{item.name}</Text>
        <Text style={styles.textColorGrey}>from {item.restaurant}</Text>
        <View style={styles.priceWrapper}>
          <Text style={styles.textColorGrey}>
            {item.count}x ${item.price}
          </Text>
          <Text style={styles.totalPrice}>${(item.price * item.count).toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.counter}>
        <AntDesign
          name="minus"
          size={20}
          color={colors.grey}
          onPress={() => dispatch(removeMeal({ name: item.name }))}
        />
        <Text style={styles.textColorPurple}>{item.count}</Text>
        <AntDesign
          name="plus"
          size={20}
          color={colors.grey}
          onPress={() => dispatch(addMeal({ name: item.name, price: item.price }))}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  counter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 10,
    width: 100,
    padding: 5,
    height: 50,
  },
  description: {
    width: 200,
  },
  priceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mealName: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.secondary,
  },
  textColorPurple: {
    color: colors.secondary,
  },
  textColorGrey: {
    color: colors.grey,
    fontSize: 12,
  },
  totalPrice: {
    fontSize: 15,
    color: colors.secondary,
  },
  wrapper: {
    width: '96%',
    height: 80,
    marginHorizontal: '2%',
    marginVertical: 5,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.black,
    elevation: 5,
    shadowOffset: { height: 5, width: 5 },
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default CartItem;
