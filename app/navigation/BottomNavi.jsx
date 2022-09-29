import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserScreen from '../screens/UserScreen';
import OrderPathNavigation from './OrderPathNavigation';
import CartAndPaymentsNavigation from './CartAndPaymentsNavi';
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import colors from '../config/colors';

const BottomNavi = () => {
  const Tab = createBottomTabNavigator();
  const cart = useSelector((state) => state.cart).length;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'MainPath':
              iconName = 'home';
              break;
            case 'Cart':
              iconName = 'shoppingcart';
              break;
            case 'UserScreen':
              iconName = 'infocirlceo';
              break;
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="MainPath" component={OrderPathNavigation} />
      <Tab.Screen
        name="Cart"
        component={CartAndPaymentsNavigation}
        options={{ unmountOnBlur: true, tabBarBadge: cart ? cart : null }}
      />
      <Tab.Screen name="UserScreen" component={UserScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavi;
