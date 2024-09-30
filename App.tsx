import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import HomeStackNavigation from './navigation/HomeStackNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <HomeStackNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
