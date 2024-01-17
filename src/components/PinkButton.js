import React from "react";
import { View,Text, StyleSheet, TouchableOpacity } from "react-native";

const PinkButton = ({onPress, text, text1}) => {
   
    return (
        
    <View style={styles.bottom}> 

            <View style={{height: 24, alignItems:"center", justifyContent: 'center',}}> 
                    <Text style = {styles.textPassword}>{text1}</Text>
            </View>
            
            <TouchableOpacity onPress={onPress} style={styles.button}>
                    <Text style = {styles.buttonText}>{text}</Text>
            </TouchableOpacity>

      </View>
         
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 60,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: "#A77884",
        width: '100%',
        textAlign: 'center',  
        fontFamily: 'Roboto',
        fontSize: 18,  
        fontWeight: "bold",
    },
    bottom: {
        justifyContent: 'flex-end',
        width: "100%",
        height: 92,
        marginTop: 20,
      },
      buttonPassword: {
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        height: 24,
    },
    textPassword: {
        color: "#fff",
        width: '100%',
        textAlign: 'center',  
        fontFamily: 'Roboto',
        fontSize: 18,  
        fontWeight: "bold",
    },
});

export default  PinkButton;