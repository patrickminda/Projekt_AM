import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import AddRating from '../screens/AddRating';
import TabNav from './TabNav';
import RatingsScreen from '../screens/RatingsScreen';
import AddPhoto from '../screens/AddPhoto';
import ServiceProviderScreen from '../screens/ServiceProviderScreen';


const Stack = createNativeStackNavigator();

const AppNavigation = ( ) => {

  return (
    <NavigationContainer>

    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
      <Stack.Screen name="TabNav" component={TabNav} />
      <Stack.Screen name="AddPhoto" component={AddPhoto}/>
      <Stack.Screen name="AddRating" component={AddRating}/>
      
      <Stack.Screen name="RatingsScreen" component={RatingsScreen} />
      <Stack.Screen name="ServiceProviderScreen" component={ServiceProviderScreen} />
    </Stack.Navigator>

    
    
    </NavigationContainer>
  );
};



export default AppNavigation;
