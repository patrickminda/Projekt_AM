import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import GradientBackground from '../components/GradientBackground';
import WhiteButton from '../components/WhiteButton';

const ServiceProviderScreen = ({navigation}) => {
  
  return (
    <GradientBackground>
        <View style={styles.container}>

        <WhiteButton text={"Opinie"} onPress={() => navigation.navigate('RatioStackNav')}/>

        </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default ServiceProviderScreen;
