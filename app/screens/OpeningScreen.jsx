import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Image, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/form/Input';
import AppButton from '../components/Button';
import ErrorMessage from '../components/form/ErrorMessage';
import hero from '../assets/hero.png';
import colors from '../config/colors';
import { useFormik } from 'formik';
import { getData, storeData } from '../utils';
import constants from '../constants';
import { useNavigation } from '@react-navigation/native';

const OpeningScreen = () => {
  const [address, setAddress] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    getData('address', setAddress);
  });

  const formik = useFormik({
    initialValues: {
      address: '',
    },
    validationSchema: Yup.object({
      address: Yup.string()
        .required('Address is required')
        .min(5, 'Address must be at least 5 chars'),
    }),
    onSubmit: (values) => {
      storeData('address', values);
      navigation.push('Restaurants');
    },
  });

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } = formik;

  return (
    <Screen>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <View style={[styles.containerWithOpacity, styles.logoContainer]}>
            <Text style={styles.logo}>{constants.appName}</Text>
            <Text style={styles.slogan}>by New Relic</Text>
          </View>
          <View style={styles.containerWithOpacity}>
            <AppTextInput
              name="address"
              icon={'home'}
              placeholder="Enter your delivery address"
              style={styles.input}
              value={values.address}
              width="98%"
              onChangeText={handleChange('address')}
              onBlur={handleBlur('address')}
            />
            {touched.address && errors.address ? <ErrorMessage message={errors.address} /> : null}
            <AppButton
              title="find restaurants"
              width="98%"
              color="secondary"
              onPress={handleSubmit}
            />
          </View>
          <Image source={hero} style={styles.image} />

          {address && (
            <View style={[styles.containerWithOpacity, styles.address]}>
              <Text style={styles.addressText}>Delivering to: {address}</Text>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
};

const styles = StyleSheet.create({
  address: {
    paddingBottom: 10,
  },
  addressText: {
    color: colors.secondary,
    fontWeight: '600',
    fontSize: 15,
    zIndex: 1,
  },
  containerWithOpacity: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    alignSelf: 'center',
    height: 300,
    width: 300,
  },
  logo: {
    color: colors.secondary,
    fontSize: 30,
    fontWeight: '400',
  },
  slogan: {
    fontSize: 15,
    color: colors.secondary,
  },
  logoContainer: {
    marginVertical: 15,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default OpeningScreen;
