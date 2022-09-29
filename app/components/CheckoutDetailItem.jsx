import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

const CheckoutDetailItem = ({ icon, title, value }) => {
  return (
    <View style={styles.detailItem}>
      {icon}
      <Text style={styles.greyText}>{title}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailItem: {
    marginVertical: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  detailValue: {
    color: colors.secondary,
  },
  greyText: {
    color: colors.grey,
    fontSize: 16,
    marginHorizontal: 5,
  },
});

export default CheckoutDetailItem;
