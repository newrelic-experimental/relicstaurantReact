import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useQuery } from 'react-query';
import RestaurantCard from '../components/RestaurantCard';
import Screen from '../components/Screen';
import { getRestaurants } from '../utils/api';

const Restaurants = ({ navigation }) => {
  const { data } = useQuery('restaurants', getRestaurants);
  return (
    <Screen>
      <FlatList
        initialNumToRender={50}
        refreshing
        style={styles.list}
        data={data}
        keyExtractor={(restaurant) => restaurant.name.toString()}
        numColumns={1}
        renderItem={({ item }) => <RestaurantCard item={item} navigation={navigation} />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  list: {
    height: '100%',
    paddingBottom: 50,
  },
});

export default Restaurants;
