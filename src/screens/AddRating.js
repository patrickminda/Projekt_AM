import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import GradientBackground from '../components/GradientBackground';

const AddRating = ({navigation}) => {
  

  return (
    <GradientBackground>
    <View style={styles.container}>
      <Text style={styles.title}>Ocena</Text>

      
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

export default AddRating;
