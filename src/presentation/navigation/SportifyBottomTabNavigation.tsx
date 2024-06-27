import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';

import {BottomTabBarIcon} from '../components';
import {ProfileStackNavigation} from './ProfileStackNavigation';
import {DashboardStackNavigation} from './DashboardStackNavigation';

const Tab = createBottomTabNavigator();

const SampleScreen = () => {
  return (
    <View>
      <Text>SampleScreen</Text>
    </View>
  );
};

export const SportifyBottomTabsNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardStackNavigation}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabBarIcon icon="home" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={SampleScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabBarIcon icon="sticky-note-2" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Highlights"
        component={SampleScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabBarIcon icon="video-library" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileSection"
        component={ProfileStackNavigation}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabBarIcon icon="person" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
