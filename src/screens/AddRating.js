// AddRating.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import GradientBackground from '../components/GradientBackground';

const AddRating = ({ route, navigation }) => {
  // Użyj route.params.image zamiast navigation.getParam('image')
  const imageUri = route.params?.image;

  return (
    <GradientBackground>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btnCam}
          onPress={() => navigation.navigate('AddPhoto')}
        >
          <Text style={styles.textBtn}>Open Camera</Text>
        </TouchableOpacity>
        {/* Wyświetl przechwycone zdjęcie */}
        {imageUri && (
          <Image source={{ uri: `file://${imageUri}` }} style={styles.image} />
        )}
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 300,
    alignSelf: 'center',
  },
  btnCam: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 50,
    borderRadius: 6,
    backgroundColor: 'green',
    margin: 20,
  },
  textBtn: {
    color: '#fff',
  },
});

export default AddRating;
