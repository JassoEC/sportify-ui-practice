import {Text} from 'react-native';

import {
  AppTextInput,
  BlackButton,
  GrayButton,
  ManropeText,
  ScreenWrapper,
} from '../../components';

interface Props {}

export const SignInScreen = ({}: Props) => {
  return (
    <ScreenWrapper
      textHeader="SIGN IN WITH YOUR SPORTIFY ID"
      backgroundText="Sign IN">
      <AppTextInput placeholder="Email" keyboardType="email-address" />
      <AppTextInput placeholder="Password" secureEntry />

      <ManropeText
        style={{
          marginBottom: 25,
          alignSelf: 'flex-end',
          textDecorationLine: 'underline',
        }}
        text={'Forgot password?'}
      />

      <BlackButton text="Sign in" style={{marginBottom: 10}} />

      <ManropeText
        text="Your Sportify account is now Sportify ID. If you’ve signed into the app
        before, use the same credentials here. otherwise"
      />

      <Text style={{textAlign: 'center', marginVertical: 20, fontSize: 18}}>
        OR
      </Text>
      <GrayButton text="sign up" />
    </ScreenWrapper>
  );
};
