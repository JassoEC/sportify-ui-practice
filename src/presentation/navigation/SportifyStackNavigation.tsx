import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen, SignInScreen, SignUpScreen} from '../screens';

export type SportifyStackParamList = {
  Home: undefined;
  SignUp: undefined;
  SignIn: undefined;
};

const Stack = createStackNavigator<SportifyStackParamList>();

export const SportifyStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
};
