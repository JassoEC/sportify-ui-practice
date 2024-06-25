import {createStackNavigator} from '@react-navigation/stack';

import {OnboardingScreen, SignInScreen, SignUpScreen} from '../screens';
import {SportifyBottomTabsNavigation} from './SportifyBottomTabNavigation';

export type SportifyStackParamList = {
  Onboarding: undefined;
  SignUp: undefined;
  SignIn: undefined;

  App: undefined;
};

const Stack = createStackNavigator<SportifyStackParamList>();

export const SportifyStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />

      <Stack.Screen name="App" component={SportifyBottomTabsNavigation} />
    </Stack.Navigator>
  );
};
