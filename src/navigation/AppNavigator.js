import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import RatioNav from './RatioNav';
import TabNav from './TabNav';
import ProvNav from './ProvNav';
import RatioStackNav from './RatioStackNav';


const Stack = createNativeStackNavigator();

const AppNavigation = ( ) => {

  return (
    <NavigationContainer>

    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
      <Stack.Screen name="TabNav" component={TabNav} />
      <Stack.Screen name="RatioNav" component={RatioNav}/>
      <Stack.Screen name="ProvNav" component={ProvNav}/>
      <Stack.Screen name="RatioStackNav" component={RatioStackNav} />
    </Stack.Navigator>

    
    
    </NavigationContainer>
  );
};



export default AppNavigation;
