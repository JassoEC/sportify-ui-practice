import {createStackNavigator} from '@react-navigation/stack';
import {
  ProfileScreen,
  NotificationsScreen,
  PlayersScreen,
  TeamsScreen,
} from '../screens';

interface Props {}

export type ProfileStackParamList = {
  Profile: undefined;
  Teams: undefined;
  Players: undefined;
  Notifications: undefined;
};

const Stack = createStackNavigator<ProfileStackParamList>();

export const ProfileStackNavigation = ({}: Props) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Teams" component={TeamsScreen} />
      <Stack.Screen name="Players" component={PlayersScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
    </Stack.Navigator>
  );
};
