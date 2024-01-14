import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import GradientBackground from '../components/GradientBackground';

import PinkButtonShort from '../components/PinkButtonShort'

const UserPrfileScreen = ({navigation}) => {
  

  return (
    <GradientBackground>
      <View style={styles.container}>
        <Text style={styles.title}>User</Text>

        

        <PinkButtonShort text="WYLOGUJ" onPress={() => navigation.navigate('LoginScreen')}/>

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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    marginBottom: 16,
  },
  button: {
    width: '100%',
  },
});

export default UserPrfileScreen;
