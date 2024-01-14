import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, Text, Alert, View } from 'react-native';
import WhiteButton from '../components/WhiteButton';
import WhiteInput from '../components/WhiteInput';
import PinkButton from '../components/PinkButton';
import {useForm} from 'react-hook-form';


import GradientBackground from '../components/GradientBackground';
import GradientBar from '../components/GradientBar';
import { useNavigation } from '@react-navigation/native';


const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/



const RegistrationScreen = ( ) => {

  const navigation = useNavigation();

  const {control,
    handleSubmit,
    watch,
 } = useForm();

const pwd = watch('password');


   const onSignUpPressed = async ( ) => {
     navigation.navigate('HomeScreen');
  };


  return (
    <GradientBackground>
        
  
        <SafeAreaView style={styles.container}>

        <View style={styles.contentContainer}>

        <Text style = {styles.titleText}>STWÓRZ KONTO</Text>


      <WhiteInput 
        name = "name"
        placeholder="Imie" 
        control={control}
        rules={{required: "Pole imie jest puste", 
              minLength: {
                value: 3, 
                message: "Imie powinno zawierać conajmnije 3 litery"},
                maxLength: {
                  value: 20, 
                  message: "Imie powinno zawierać maksymalnie 24 litery"},
                }}
        />


      <WhiteInput 
        name="email"
        placeholder="Adres email" 
        control={control}
        keyboardType="email-adress" 
        rules={{required: 'Pole email telefonu jest puste',
                pattern: {value: EMAIL_REGEX, message: "Nieprawidłowy format emaila"},
              }}
      />

      <WhiteInput 
        name="password"
        placeholder="Hasło"
        control={control}
        secureTextEntry
        rules={{required: 'Pole hasło jest puste',
               minLength: {value: 4, message: "Hasło musi mieć conajmniej 4 znaki"},}}
      />  

      <WhiteInput 
        name="repete-password"
        placeholder="Potwierdź hasło"
        secureTextEntry
        control={control}
        rules={{
                validate: value => 
                value === pwd || 'Hasła są niezgodne',
      }}

        />

     

         <WhiteButton text="ZAREJESTRUJ SIĘ" onPress={handleSubmit(onSignUpPressed)}/>

      <GradientBar/>

      </View>
      <PinkButton text="Zaloguj się" text1="Posiadasz konta?" onPress={() => navigation.navigate('LoginScreen')}/>
     


      
     
       
        </SafeAreaView>
    
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',  
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
titleText: {
    color: "#Fff",
    width: '100%',
    textAlign: 'center',  
    fontFamily: 'Roboto',
    fontSize: 20,  
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 72,
},
 
});

export default RegistrationScreen;
