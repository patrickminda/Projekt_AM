import React from "react";
import { View, TextInput, StyleSheet, Text} from "react-native";
import { Controller } from "react-hook-form";

const WhiteInput = ({control, name, rules = {}, placeholder, secureTextEntry}) => {
   
    return (
        
       
      
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({field: {value, onChange, onBlur}, fieldState: {error}}) =>(
                    <>
                    <View 
                        style={[styles.container, 
                        {borderColor: error ? "red" : "#fff"},
                    ]}>
                    <TextInput
                        value={value}
                        onChangeText={onChange}
                        placeholder={placeholder}
                        placeholderTextColor="#fff"
                        onBlur={onBlur}
                        style={styles.input}
                        secureTextEntry={secureTextEntry}
                    />
                    </View>
                    {error && (
                        <Text style ={{color: 'red', alignSelf: 'stretch', marginLeft: 30,}}>
                            {error.message || 'Error'}
                        </Text>
                    )}
                    </>
                    
                )}
            
            />
        
        
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        borderColor: "#fff",
        borderWidth: 2,
        width: '100%',
        height: 62,
        borderRadius: 50,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
      
    },
    input: {
        color: "#fff",
        paddingLeft: 30,
        width: '100%',
        textAlign: 'left',  
        fontFamily: 'Roboto',
        fontSize: 20,  
        fontWeight: '100',
        
    }
});

export default  WhiteInput;