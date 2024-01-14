import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ServiceProviderScreen from '../screens/ServiceProviderScreen';

const Stack = createNativeStackNavigator();

const ProvNav = ( ) => {

  return (

    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ServiceProviderScreen" component={ServiceProviderScreen} />
    </Stack.Navigator>
    
  );
};

export default ProvNav;
