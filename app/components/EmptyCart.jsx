import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../config/colors';

const EmptyCart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your cart is empty</Text>
      <AntDesign name="shoppingcart" size={48} color={colors.grey} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.grey,
  },
});

export default EmptyCart;
