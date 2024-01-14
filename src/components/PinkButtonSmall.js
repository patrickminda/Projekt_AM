import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const WhiteButton = ({onPress, text}) => {
   
    return (
        
      <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style = {styles.buttonText}>{text}</Text>
      </TouchableOpacity>

        
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#A77884",
        borderRadius: 8,
        width: 60,
        height: 20,
        borderRadius: 50,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#000",
        marginTop: 15,
    },
    buttonText: {
        color: "#fff",
        width: '100%',
        textAlign: 'center',  
        fontFamily: 'Roboto',
        fontSize: 14,  
        fontWeight: "bold",
    }
});

export default  WhiteButton;