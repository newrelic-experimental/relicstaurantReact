import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

const AppButton = ({ title, onPress, color = 'primary', width, style }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color], width: width }, style]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginVertical: 10,
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    color: colors.white,
    fontSize: 15,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
});

export default AppButton;
