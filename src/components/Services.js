import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import GradientBarShort from './GradientBarShort';

const Services = ({name}) => {

  return (
    
        <View style={styles.container}>
             <GradientBarShort/>
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                
                <AntDesign name="up" size={20} color="white" style={styles.icon} />
            </View>
        </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 45,
    marginTop: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  name: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
    fontWeight: 'semibold',
    marginLeft: 10,
  },
  icon: {
    marginRight: 15,
    marginTop: 10, 
  }
});

export default Services;
