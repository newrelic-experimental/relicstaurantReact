import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from '../components/Screen';
import Title from '../components/Title';
import colors from '../config/colors';

const ThankYouScreen = ({ route }) => {
  return (
    <Screen>
      <View style={styles.container}>
        <Title>Thank you for your order</Title>
        <Text style={styles.color}>Your order ID: {route.params.ID.orderId}</Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  id: {
    color: colors.grey,
  },
});

export default ThankYouScreen;
