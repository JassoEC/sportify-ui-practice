import {Image, Text, View} from 'react-native';
import {Button, MainContainer, ScreenWrapper} from '../../components';
import {appStyles} from '../../../config';

interface Props {}

export const LoginScreen = ({}: Props) => {
  return (
    <ScreenWrapper>
      <Image
        source={require('../../../assets/auth/login/garota-1-2048x2048.png')}
        style={{width: '100%', position: 'absolute', top: '5%'}}
      />
      <Image
        source={require('../../../assets/auth/login/right-lines.png')}
        resizeMode="center"
        style={{
          resizeMode: 'contain',
          height: '58%',
          width: '58%',
          position: 'absolute',
          zIndex: -1,
          alignSelf: 'flex-end',
        }}
      />
      <MainContainer
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View style={{backgroundColor: 'transparent', width: 180}}>
          <Image
            source={require('../../../assets/auth/login/top-logo-colorized.png')}
            style={{width: 140}}
            resizeMode="contain"
          />
        </View>
        <View style={{paddingBottom: 20, backgroundColor: 'transparent'}}>
          <Text
            style={[
              {
                fontSize: 64,
                textTransform: 'uppercase',
              },
              appStyles.appFontBebasNeue,
            ]}>
            Keep an eye on the stadium
          </Text>
          <Text
            style={[
              {fontSize: 16, marginBottom: 50, fontWeight: '300'},
              appStyles.appFontMarope,
            ]}>
            Watch sports live or highlights, read every news from your
            smartphone
          </Text>
          <Button
            text="Login"
            backgroundColor="pink"
            style={{marginBottom: 10}}
          />
          <Button text="Create account" />
        </View>
      </MainContainer>
    </ScreenWrapper>
  );
};
