import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from '../config/colors';

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    marginVertical: 10,
    fontSize: 20,
    color: colors.secondary,
    paddingLeft: 10,
  },
});

export default Title;
