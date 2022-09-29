import React from 'react';
import { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import AppButton from '../components/Button';
import PaymentOption from '../components/PaymentOption';
import Screen from '../components/Screen';
import Title from '../components/Title';

const options = [
  { name: 'Visa', iconUrl: require(`../assets/visa.png`), form: 'card' },
  { name: 'CityCard', iconUrl: require(`../assets/citi.png`), form: 'card' },
  { name: 'MasterCard', iconUrl: require(`../assets/master-card-1.jpeg`), form: 'card' },
  { name: 'Cash on delivery', iconUrl: require(`../assets/dolars.jpeg`), form: 'cash' },
];

const Payments = ({ navigation, route }) => {
  const total = route.params.total;
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <Screen style={styles.wrapper}>
      <Title>Payment methods</Title>
      <FlatList
        extraData={selectedOption}
        style={styles.list}
        data={options}
        keyExtractor={(item) => item.name.toString()}
        numColumns={1}
        renderItem={({ item }) => (
          <PaymentOption
            setOption={setSelectedOption}
            item={item}
            selectedOption={selectedOption}
          />
        )}
      />
      <AppButton
        disable={selectedOption}
        style={styles.button}
        title="Checkout"
        width="98%"
        color="secondary"
        onPress={() =>
          navigation.push('Checkout', {
            total: total,
            selectedOption,
          })
        }
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: '1%',
  },
});

export default Payments;
