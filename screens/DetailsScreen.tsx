import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigatorParamList } from '../navigation/HomeStackNavigation';

type Props = NativeStackScreenProps<StackNavigatorParamList, 'Details'>;

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>DetailsPage!</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
