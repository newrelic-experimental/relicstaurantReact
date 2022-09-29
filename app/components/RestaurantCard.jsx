import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import { getImage } from '../config/imageSource';
import { Rating } from 'react-native-ratings';

const RestaurantCard = ({ item, navigation }) => {
  const imageAddress = getImage(item.id);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.push('Restaurant', {
          id: item.id,
        })
      }
    >
      <View style={styles.cardContainer}>
        <Image source={imageAddress} style={styles.image} />
        <View style={styles.nameAndScore}>
          <Text style={styles.title}>{item.name}</Text>
          <Rating readonly startingValue={item.rating} imageSize={14} ratingCount={item.rating} />
        </View>
        <View style={styles.restaurantInfo}>
          <Text style={styles.cuisineText}>Cuisine {item.cuisine}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '96%',
    height: 200,
    marginHorizontal: '2%',
    marginVertical: 5,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.black,
    elevation: 5,
    shadowOffset: { height: 5, width: 5 },
  },
  cuisineText: {
    color: colors.secondary,
  },
  image: {
    height: 150,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  nameAndScore: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantInfo: {
    paddingLeft: 10,
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    paddingHorizontal: 10,
    fontSize: 20,
    color: colors.secondary,
  },
});

export default RestaurantCard;
