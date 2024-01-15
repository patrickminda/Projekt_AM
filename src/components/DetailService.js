import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Services = ({name, price}) => {

  return (
    
        <View style={styles.container}>
            <View style={styles.content}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.price}>{price}</Text>
                        <TouchableOpacity style={styles.btn} onPress={() => console.warn('Ekran w budowie :)')}>
                            <Text style={styles.btnText}>Umów</Text>
                        </TouchableOpacity>
                </View>
        </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 24,
    marginTop: 15,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center', 
  },
  name: {
    fontSize: 12,
    color: 'white',
    marginTop: 5,
    fontWeight: 'light',
    marginLeft: 10,
    width: '60%',
  },
  price: {
    fontSize: 12,
    color: 'white',
    marginTop: 5,
    fontWeight: 'light',
  },
  btn: {
    backgroundColor: "#F8A6A6",
    width: 50,
    height: 22,
    borderRadius:5,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#F8A6A6",
    marginTop: 2,  
},
btnText: {
    color: "#fff",
    textAlign: 'center',  
    fontSize: 11,  
    fontWeight: "bold",
}
});

export default Services;
