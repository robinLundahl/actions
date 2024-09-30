import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

export type StackNavigatorParamList = {
  HomeScreen: undefined;
  Details: undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorParamList>();

export default function HomeStackNavigation() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
