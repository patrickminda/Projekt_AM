import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddRating from '../screens/AddRating';

const Stack = createNativeStackNavigator();

const RatioNav = ( ) => {

  return (
    

    <Stack.Navigator>
      <Stack.Screen name="Dodaj opinie" component={AddRating} />
    </Stack.Navigator>

  );
};

export default RatioNav;
