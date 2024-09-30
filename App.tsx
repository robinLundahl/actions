import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import HomeStackNavigation from './navigation/HomeStackNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <HomeStackNavigation />
    </NavigationContainer>
  );
}
