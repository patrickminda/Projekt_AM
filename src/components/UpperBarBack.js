import React from "react";
import { View,  StyleSheet, Text, TouchableOpacity} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const UpperBarBack = ({onPress, name}) => {
   
    return (
        <View style={styles.UpperBar}>
        <TouchableOpacity onPress={onPress}>
          <FontAwesome name="angle-left" size={34} color="black" style={styles.icon}/>
        </TouchableOpacity>
        <Text style={styles.UpperBarText}>{name}</Text>
      </View>
        
    );
};

const styles = StyleSheet.create({
    UpperBar: {
        flexDirection: 'row',
        backgroundColor: "white", 
        width: "110%",
        height: 50,
        alignItems: 'center',
        
      },
      UpperBarText: {
        marginLeft: 30,
        justifyContent: 'center',
        fontSize: 24,
        fontWeight: "500",
      },
      icon: {
        marginLeft: 30,
      },
});

export default  UpperBarBack;