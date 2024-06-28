import {createStackNavigator} from '@react-navigation/stack';

import {ArticleScreen, DashboardHomeScreen} from '../screens';

interface Props {}

export type DashboardStackParamList = {
  Home: undefined;
  Article: undefined;
};

const Stack = createStackNavigator<DashboardStackParamList>();

export const DashboardStackNavigation = ({}: Props) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={DashboardHomeScreen} />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
};
