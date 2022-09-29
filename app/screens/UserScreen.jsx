import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from '../components/Screen';
import Title from '../components/Title';
import colors from '../config/colors';

const UserScreen = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Title>Relicstaurants</Title>
        <Text style={styles.color}>This application exists for testing purposes.</Text>
        <Text style={styles.color}>
          With our React Native agent, your team can monitor the performance of its hybrid apps and
          identify code errors. Our agent collects crash data, network traffic, and other
          information for hybrid apps using native components. The agent allows your team to
          understand the health of your hybrid app regardless of the platform. We empower your team
          to make more informed development choices by providing insight into Javascript errors,
          distributed tracing, network instrumentation, and more.
        </Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  color: {
    color: colors.grey,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserScreen;
