import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';
import { StackNavigatorParamList } from '../navigation/HomeStackNavigation';

type HomeProps = NativeStackScreenProps<StackNavigatorParamList, 'HomeScreen'>;

export default function HomeScreen({ navigation }: HomeProps) {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
