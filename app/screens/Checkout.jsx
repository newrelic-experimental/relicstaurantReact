import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { format, add } from 'date-fns';
import Screen from '../components/Screen';
import AppTextInput from '../components/form/Input';
import AppButton from '../components/Button';
import Title from '../components/Title';
import ErrorMessage from '../components/form/ErrorMessage';
import CheckoutDetailItem from '../components/CheckoutDetailItem';
import { getData, handleOrderSending } from '../utils';
import { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { clearCart } from '../cartStore/cartSlice';
import colors from '../config/colors';

const Checkout = ({ route }) => {
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const estimatedDeliveryTime = format(add(new Date(), { hours: 1, minutes: 15 }), 'p');

  useEffect(() => {
    getData('address', setAddress);
  });

  const formik = useFormik({
    initialValues: {
      card: '',
      month: '',
      year: '',
      cvv: '',
    },
    validationSchema: Yup.object({
      card: Yup.number('Pleas use only numbers')
        .required('Card number is required')
        .min(16, 'Card number must be min 16 chars'),
      month: Yup.number().min(2, '').required('Expiration month is required'),

      year: Yup.number().min(4).positive().integer().required('Expiration year is required'),
      cvv: Yup.number().min(3).positive().integer().required('CVV code is required'),
    }),
    onSubmit: async (values) => {
      const { data } = await handleOrderSending(values);
      dispatch(clearCart());
      await navigation.push('ThankYou', { ID: data });
    },
  });

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } = formik;
  return (
    <Screen>
      <Title>Checkout</Title>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.screenWrapper}>
          <View>
            <View style={styles.wrapper}>
              <Text style={styles.purpleText}>Payment details</Text>
              <AppTextInput
                name="card"
                icon={'credit-card-outline'}
                placeholder="Card number"
                style={styles.input}
                value={values.card}
                width="100%"
                onChangeText={handleChange('card')}
                onBlur={handleBlur('card')}
                keyboardType="decimal-pad"
                maxLength={16}
              />
              {touched.card && errors.card ? <ErrorMessage message={errors.card} /> : null}
              <View style={styles.cardDataCvv}>
                <AppTextInput
                  name="month"
                  icon={'calendar-month'}
                  placeholder="Month"
                  style={styles.input}
                  value={values.month}
                  width="33%"
                  onChangeText={handleChange('month')}
                  onBlur={handleBlur('month')}
                  keyboardType="decimal-pad"
                  maxLength={2}
                />
                <AppTextInput
                  name="year"
                  icon={'calendar-range'}
                  placeholder="Year"
                  style={styles.input}
                  value={values.year}
                  width="33%"
                  onChangeText={handleChange('year')}
                  onBlur={handleBlur('year')}
                  keyboardType="decimal-pad"
                  maxLength={4}
                />
                <AppTextInput
                  name="cvv"
                  icon={'numeric'}
                  placeholder="CVV"
                  style={styles.input}
                  value={values.cvv}
                  width="33%"
                  onChangeText={handleChange('cvv')}
                  onBlur={handleBlur('cvv')}
                  keyboardType="decimal-pad"
                  maxLength={3}
                />
              </View>
              {touched.month && errors.month ? <ErrorMessage message={errors.month} /> : null}
              {touched.year && errors.year ? <ErrorMessage message={errors.year} /> : null}
              {touched.cvv && errors.cvv ? <ErrorMessage message={errors.cvv} /> : null}
            </View>
            <View style={styles.wrapper}>
              <Text style={styles.purpleText}>Order details:</Text>

              <CheckoutDetailItem
                icon={<MaterialIcons name="attach-money" size={16} color={colors.secondary} />}
                title="Total:"
                value={`$${route.params.total.toFixed(2)}`}
              />
              <CheckoutDetailItem
                icon={<AntDesign name="creditcard" size={16} color={colors.secondary} />}
                title="Payment form:"
                value={route.params.selectedOption.name}
              />
              <CheckoutDetailItem
                icon={<AntDesign name="home" size={16} color={colors.secondary} />}
                title="Address:"
                value={address}
              />
            </View>
            <View style={styles.wrapper}>
              <CheckoutDetailItem
                icon={<MaterialIcons name="timer" size={24} color={colors.secondary} />}
                title="Estimated delivery time:"
                value={estimatedDeliveryTime}
              />
            </View>
          </View>
          <AppButton
            title="Pay"
            width="98%"
            color="secondary"
            onPress={handleSubmit}
            style={styles.button}
          />
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
  },
  cardDataCvv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardForm: {
    paddingHorizontal: '1%',
  },
  greyText: {
    color: colors.grey,
    fontSize: 16,
    marginHorizontal: 5,
  },
  orderDetails: {
    width: '100%',
  },
  purpleText: {
    color: colors.secondary,
  },
  screenWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  wrapper: {
    width: '96%',
    marginHorizontal: '2%',
    marginVertical: 5,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.black,
    elevation: 5,
    shadowOffset: { height: 5, width: 5 },
    padding: 10,
    justifyContent: 'space-between',
  },
});
export default Checkout;
