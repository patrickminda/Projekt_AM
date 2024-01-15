import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ServiceProviderScreen from '../screens/ServiceProviderScreen';
import RatingsScreen from '../screens/RatingsScreen';

const Stack = createNativeStackNavigator();

const ProvNav = ( ) => {

  return (

    
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ServiceProviderScreen" component={ServiceProviderScreen} />
      <Stack.Screen name="RatingsScreen" component={RatingsScreen} />
    </Stack.Navigator>
    
  );
};

export default ProvNav;
