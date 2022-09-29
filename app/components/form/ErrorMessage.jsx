import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from '../../config/colors';

const ErrorMessage = ({ message }) => {
  return <Text style={styles.errorText}>{message}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: colors.red,
    fontSize: 15,
    fontWeight: '500',
  },
});

export default ErrorMessage;
