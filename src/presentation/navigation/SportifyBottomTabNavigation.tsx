import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {BottomTabBarIcon, SportifyTabBarButton} from '../components';
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
  const {bottom} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: bottom + 20,
          elevation: 0,
          height: 48,
          backgroundColor: 'transparent',
          paddingHorizontal: 20,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardStackNavigation}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabBarIcon icon="home" focused={focused} />
          ),
          tabBarButton: props => <SportifyTabBarButton {...props} leftBorder />,
        }}
      />
      <Tab.Screen
        name="Home"
        component={SampleScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabBarIcon icon="sticky-note-2" focused={focused} />
          ),
          tabBarButton: props => <SportifyTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Highlights"
        component={SampleScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabBarIcon icon="video-library" focused={focused} />
          ),
          tabBarButton: props => <SportifyTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="ProfileSection"
        component={ProfileStackNavigation}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabBarIcon icon="person" focused={focused} />
          ),
          tabBarButton: props => (
            <SportifyTabBarButton {...props} rightBorder />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
