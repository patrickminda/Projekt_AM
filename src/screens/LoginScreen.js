import React from 'react';
import {useForm } from 'react-hook-form';
import { View, Text,  StyleSheet, TouchableOpacity } from 'react-native';
import WhiteButton from '../components/WhiteButton';
import WhiteInput from '../components/WhiteInput';
import PinkButton from '../components/PinkButton';
import GradientBackground from '../components/GradientBackground';
import GradientBar from '../components/GradientBar';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ( ) => {

  const navigation = useNavigation();

  const {control,
         handleSubmit,
         watch,
        formState: {errors},
      } = useForm();

const pwd = watch('username');  
    
  const onSignInPressed = () => {
   
    navigation.navigate('TabNav');
  }
  
  const onForgotPasswordPressed = () => {
    console.warn('Strona w budowie :)');
  }

  return (

    
    <GradientBackground>

    <View style={styles.container}>
     
    <View style={styles.contentContainer}>

    
      <WhiteInput 
        name="username"
        placeholder="Nazwa użytkownika" 
        control={control}
        rules={{required: "Pole nazwa użytkownika jest puste"}}
        />

      <WhiteInput 
        name="password"
        placeholder="Hasło"
        control={control}
        secureTextEntry
        rules={{
          required: 'Pole hasło jest puste',
          validate: value => 
          value === pwd || 'Hasła są niezgodne',
        }}
        />
        
  

      <WhiteButton text={"ZALOGUJ SIĘ"}
       onPress={handleSubmit(onSignInPressed)}/>

      <GradientBar></GradientBar>

      <TouchableOpacity onPress={onForgotPasswordPressed} style={styles.buttonPassword}>
        <Text style = {styles.textPassword}>Zapomniałeś hasła?</Text>
      </TouchableOpacity>
      </View>

      <PinkButton text="Dołacz do nas" text1="Nie posiadasz konta?" onPress={() => navigation.navigate('RegistrationScreen')}/>

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
 

});

export default LoginScreen;
