import React from 'react';
import { FlatList, Image, StyleSheet, Text } from 'react-native';
import { useQuery } from 'react-query';
import MenuItem from '../components/MenuItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import { getImage } from '../config/imageSource';
import { getRestaurant } from '../utils/api';

const SingleRestaurant = ({ route }) => {
  const id = route.params.id;
  const imageAddress = getImage(id);

  const { data } = useQuery('restaurant', () => getRestaurant(id));

  return (
    <Screen style={styles.container}>
      <Text style={styles.title}>{data?.name} </Text>
      <Image source={imageAddress} style={styles.image} />
      <Text style={styles.text}>"{data?.description}"</Text>
      <Text style={styles.title}>Menu</Text>
      <FlatList
        initialNumToRender={50}
        refreshing
        style={styles.list}
        data={data?.menuItems}
        keyExtractor={(item) => item.name.toString()}
        numColumns={1}
        renderItem={({ item }) => <MenuItem item={item} id={id} />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  image: {
    height: 150,
    width: '100%',
  },
  list: {
    height: '100%',
    paddingBottom: 50,
    paddingLeft: 10,
  },
  title: {
    marginVertical: 10,
    paddingLeft: 10,
    fontSize: 20,
    color: colors.secondary,
  },
  text: {
    marginVertical: 10,
    paddingLeft: 10,
    fontSize: 15,
    color: colors.secondary,
    borderRightWidth: 1,
    borderRightColor: colors.primary,
  },
});

export default SingleRestaurant;
