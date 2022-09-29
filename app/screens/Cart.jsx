import React from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AppButton from '../components/Button';
import CartItem from '../components/CartItem';
import EmptyCart from '../components/EmptyCart';
import Screen from '../components/Screen';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { clearCart } from '../cartStore/cartSlice';
import Title from '../components/Title';

const Cart = ({ navigation }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let total = 0;
  cart.forEach((item) => (total += item.price * item.count));

  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <Title>Cart</Title>
      </View>
      {cart.length === 0 && <EmptyCart />}
      {cart.length !== 0 && (
        <>
          <View>
            <FlatList
              style={styles.list}
              initialNumToRender={50}
              refreshing
              data={cart}
              numColumns={1}
              renderItem={({ item }) => <CartItem item={item} dispatch={dispatch} />}
            />
          </View>
          <View style={styles.summary}>
            <View style={styles.total}>
              <Text style={styles.totalText}>Total:</Text>
              <Text style={styles.totalPrice}>${total.toFixed(2)}</Text>
            </View>
            <AppButton
              title="Chose Payment Method"
              width="98%"
              color="secondary"
              onPress={() =>
                navigation.push('Payments', {
                  total: total,
                })
              }
            />
          </View>
        </>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  list: {
    height: '80%',
    paddingBottom: 300,
  },
  summary: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  total: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  totalPrice: {
    color: colors.secondary,
    fontSize: 16,
  },
  totalText: {
    color: colors.grey,
    fontSize: 16,
  },
});

export default Cart;
