import {Image, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {
  BebasNeueText,
  MainContainer,
  ManropeText,
  PinkButton,
  GrayButton,
  ColorizedLogo,
} from '../components';
import {SportifyStackParamList} from '../navigation';

interface Props {}

export const OnboardingScreen = ({}: Props) => {
  const navigation = useNavigation<NavigationProp<SportifyStackParamList>>();

  return (
    <>
      <Image
        source={require('../../assets/images/auth/login/garota-1-2048x2048.png')}
        style={{
          width: '100%',
          position: 'absolute',
        }}
      />

      <Image
        source={require('../../assets/images/auth/login/right-lines.png')}
        resizeMode="center"
        style={{
          resizeMode: 'contain',
          position: 'absolute',
          zIndex: -1,
          alignSelf: 'flex-end',
        }}
      />

      <MainContainer
        safeArea
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View style={{backgroundColor: 'transparent', width: 180}}>
          <ColorizedLogo />
        </View>
        <View style={{paddingBottom: 20, backgroundColor: 'transparent'}}>
          <BebasNeueText
            text="Keep an eye on the stadium"
            style={{fontSize: 64, textTransform: 'uppercase'}}
            color="black"
          />

          <ManropeText
            color="black"
            style={{
              fontSize: 16,
              marginBottom: 50,
              fontWeight: '300',
            }}
            text={
              'Watch sports live or highlights, read every news from your smartphone'
            }
          />

          <PinkButton
            text="Login"
            onPress={() => navigation.navigate('SignIn')}
            style={{marginBottom: 10}}
          />

          <GrayButton
            text="Create Account"
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </MainContainer>
    </>
  );
};
