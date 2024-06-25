import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen} from '../components';

const Tab = createBottomTabNavigator();

export const SportifyBottomTabsNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};
