import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OpeningScreen from '../screens/OpeningScreen';
import Restaurants from '../screens/Restaurants';
import SingleRestaurant from '../screens/SingleRestaurant';

function OrderPathNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Address" component={OpeningScreen} />
      <Stack.Screen name="Restaurants" component={Restaurants} />
      <Stack.Screen name="Restaurant" component={SingleRestaurant} />
    </Stack.Navigator>
  );
}

export default OrderPathNavigation;
