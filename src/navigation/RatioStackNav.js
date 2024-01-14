import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RatingsScreen from '../screens/RatingsScreen';

const Stack = createNativeStackNavigator();

const RatioStackNav = ( ) => {

  return (

    <Stack.Navigator >
      <Stack.Screen name="Opinie" component={RatingsScreen} />
    </Stack.Navigator>

  );
};

export default RatioStackNav;
