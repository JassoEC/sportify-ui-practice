import {View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {
  AppTextInput,
  BlackButton,
  ManropeText,
  WithHeaderScreenWrapper,
} from '../../components';
import {APP_COLORS} from '../../../config';
import {SportifyStackParamList} from '../../navigation';

interface Props {}

export const SignUpScreen = ({}: Props) => {
  const navigation = useNavigation<NavigationProp<SportifyStackParamList>>();

  return (
    <WithHeaderScreenWrapper
      textHeader="Create your Sportify Id"
      textSubHeader="Get news,game updates highlights and more info on your favorite teams"
      backgroundText="JOIN"
      style={{
        paddingBottom: 20,
      }}>
      <AppTextInput placeholder="First Name" />
      <AppTextInput placeholder="Last Name" />

      <AppTextInput placeholder="Email" keyboardType="email-address" />
      <AppTextInput placeholder="Password" secureEntry />

      <ManropeText
        color="gray100"
        text="Password must be at least 8 character long and include 1 capital letter
        and 1 symbol"
        style={{marginBottom: 25}}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 30,
        }}>
        <MaterialIcon
          name="check-box-outline-blank"
          size={25}
          color={APP_COLORS.gray80}
        />
        <ManropeText
          style={{marginLeft: 5}}
          text={'I agree to the Terms and Privacy Policy'}
        />
      </View>

      <BlackButton
        text="Create Account"
        onPress={() => navigation.navigate('App')}
      />
      <ManropeText
        text={
          'By agreeing to the above terms, you are consenting that your personal information will be collected, stored, and processed in the United States and the European Union on behalf of Sporify Properties, Inc.'
        }
        style={{marginVertical: 25}}
      />
    </WithHeaderScreenWrapper>
  );
};
