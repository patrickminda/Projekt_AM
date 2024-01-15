import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

const ProviderData = ({name,adress}) => {

  return (
    
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.adress}>{adress}</Text>


        </View>
    
  );
};


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    marginTop: 10,
  },
  name: {
    fontSize: 24,
    color: 'white',
    marginTop: 10,
    fontWeight: 'bold',
  },
  adress: {
    fontSize: 11,
    color: 'white',
    marginTop: 5,
    fontWeight: 'light',
  },
});

export default ProviderData;
