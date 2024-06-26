import {createStackNavigator} from '@react-navigation/stack';
import {MainProfileScreen, PlayersScreen, TeamsScreen} from '../screens';

interface Props {}

export type ProfileStackParamList = {
  Profile: undefined;
  Teams: undefined;
  Players: undefined;
};

const Stack = createStackNavigator<ProfileStackParamList>();

export const ProfileStackNavigation = ({}: Props) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={MainProfileScreen} />
      <Stack.Screen name="Teams" component={TeamsScreen} />
      <Stack.Screen name="Players" component={PlayersScreen} />
    </Stack.Navigator>
  );
};
