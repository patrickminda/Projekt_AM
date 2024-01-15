import React from 'react';
import  {LinearGradient} from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native';

const GradientBackground = ({children}) => {
  return (
    
    

        <LinearGradient
          colors={[ '#A77884', "#0F193D" ]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0.1}}
          end={{ x: 0.5, y: 0.5 }}
          
          >
            
            
            <SafeAreaView style={styles.container}>{children}</SafeAreaView>

        </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    fontFamily: 'Roboto',
  },
});

export default GradientBackground;
