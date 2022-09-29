import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';

const AppTextInput = ({ icon, width = '100%', ...props }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && <MaterialCommunityIcons name={icon} size={25} style={styles.icon} />}
      <TextInput placeholderTextColor={colors.grey} style={styles.input} {...props} width="100%" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    borderColor: colors.secondary,
    height: 40,
  },
  icon: {
    marginRight: 5,
    color: colors.secondary,
  },
  input: {
    paddingRight: 30,
    borderWidth: 1,
  },
});

export default AppTextInput;
