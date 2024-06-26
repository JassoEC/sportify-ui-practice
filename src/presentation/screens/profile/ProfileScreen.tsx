import {ScrollView, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {
  BebasNeueText,
  BlackButton,
  SmallButton,
  WithHeaderScreenWrapper,
} from '../../components';
import {ProfileButton, ProfileWithTitleButton} from '../../components/profile';
import {ProfileStackParamList} from '../../navigation';

interface Props {}

export const MainProfileScreen = ({}: Props) => {
  const navigation = useNavigation<NavigationProp<ProfileStackParamList>>();

  return (
    <WithHeaderScreenWrapper
      textHeader="Welcome to sportify"
      textSubHeader="Your  Sportify ID grants you access to the exclusive offers, personalized content, and more- so you can keep being one of the best fans out there."
      style={{
        height: 339,
      }}
      additionalHeaderContent={
        <SmallButton
          text="Sig in or join"
          color="gray10"
          style={{
            marginTop: 25,
            width: 160,
          }}
        />
      }>
      <ScrollView>
        <ProfileWithTitleButton
          text="My Teams"
          secondText="Follow your favorite teams for personalized content and recommendations."
          marginBottom={25}
          onPress={() => navigation.navigate('Teams')}
        />
        <ProfileWithTitleButton
          text="My Players"
          secondText="Follow your favorite teams for personalized content and recommendations."
          onPress={() => navigation.navigate('Players')}
        />
        <BebasNeueText
          text="other options"
          fontSize={24}
          style={{marginVertical: 25}}
        />
        <ProfileButton
          text="Notifications"
          fontSize={20}
          style={{marginBottom: 30}}
        />
        <ProfileButton
          text="Privacy"
          fontSize={20}
          style={{marginBottom: 30}}
        />
        <ProfileButton
          text="Customer Support"
          fontSize={20}
          style={{marginBottom: 30}}
        />
        <ProfileButton
          text="App Info"
          fontSize={20}
          style={{marginBottom: 30}}
        />
      </ScrollView>
    </WithHeaderScreenWrapper>
  );
};
