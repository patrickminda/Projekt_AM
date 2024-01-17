import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const VerticalGradientBar = () => {
  return (
    <View style={styles.kreska}>
      <LinearGradient
        colors={['#A77884', '#0F193D']}
        style={styles.gradientBar}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }} 
      ></LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  kreska: {
    width: 4,
    height: '100%',
    overflow: 'hidden',
  },
  gradientBar: {
    flex: 1,
  },
});

export default VerticalGradientBar;
