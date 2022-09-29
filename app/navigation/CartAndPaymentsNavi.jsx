import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../screens/Cart';
import Payments from '../screens/Payments';
import Checkout from '../screens/Checkout';
import ThankYouScreen from '../screens/ThankYouScreen';

const CartAndPaymentsNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainCart" component={Cart} />
      <Stack.Screen name="Payments" component={Payments} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="ThankYou" component={ThankYouScreen} />
    </Stack.Navigator>
  );
};

export default CartAndPaymentsNavigation;
