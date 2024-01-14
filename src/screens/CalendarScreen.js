import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import GradientBackground from '../components/GradientBackground';
import GradientBarShort from '../components/GradientBarShort';
import PinkButtonSmall from '../components/PinkButtonSmall';

const CalendarScreen = ({navigation}) => {
  

  return (
    <GradientBackground>
      <View style={styles.container}>


      

          <Text style={styles.text}> Zakończone wizyty</Text>
        <GradientBarShort></GradientBarShort>

        <PinkButtonSmall text="Oceń" onPress={() => navigation.navigate('RatioNav')}/>
        

       


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
  text: {
    color: "#fff",
    width: '100%',
    textAlign: 'left',
    fontFamily: 'Roboto',
    fontSize: 18,  
    fontWeight: "bold",
  },
  
});

export default CalendarScreen;
