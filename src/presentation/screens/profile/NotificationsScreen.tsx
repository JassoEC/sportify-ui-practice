import {useState} from 'react';
import {Platform, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {APP_COLORS} from '../../../config';
import {
  BebasNeueText,
  EvilIcon,
  ManropeText,
  MaterialIcon,
} from '../../components';
import {NotificationItem} from '../../components/profile';

interface Props {}

const teams = [
  {name: 'Chelsea', image: require('../../../assets/images/teams/chelsea.png')},
  {name: 'Albion', image: require('../../../assets/images/teams/albion.png')},
  {name: 'Arsenal', image: require('../../../assets/images/teams/arsenal.png')},
  {
    name: 'Stoke City',
    image: require('../../../assets/images/teams/stoke-city.png'),
  },
  {
    name: 'Leicester City',
    image: require('../../../assets/images/teams/leicester-city.png'),
  },
  {
    name: 'Manchester United',
    image: require('../../../assets/images/teams/manchester-united.png'),
  },
];

export const NotificationsScreen = ({}: Props) => {
  const {top} = useSafeAreaInsets();

  const navigation = useNavigation();

  const [selected, setSelected] = useState(false);

  return (
    <View style={{paddingTop: top, borderColor: APP_COLORS.smoke}}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={({pressed}) => ({
          flexDirection: 'row',
          alignItems: 'flex-end',
          marginTop: Platform.OS === 'android' ? top + 20 : 10,
          marginBottom: 20,
          opacity: pressed ? 0.5 : 1,
        })}>
        <EvilIcon icon="chevron-left" size={50} color={'black'} />
        <BebasNeueText text="Notifications" fontSize={28} />
      </Pressable>
      <ScrollView>
        <View
          style={[
            styles.generalPadding,
            styles.generalBackground,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
          ]}>
          <ManropeText text="All notifications" fontSize={20} />
          <Pressable onPress={() => setSelected(!selected)}>
            <MaterialIcon
              icon={selected ? 'toggle-on' : 'toggle-off'}
              size={35}
              color={selected ? 'pinkMaybe' : 'gray60'}
            />
          </Pressable>
        </View>
        <BebasNeueText
          style={[styles.generalPadding]}
          text="League Alerts"
          fontSize={24}
        />

        <NotificationItem
          mainText="Premier League"
          secondaryText="Breaking news, editors picks, benefits & Rewards"
          imagePath={require('../../../assets/images/teams/premiere-lion.png')}
          disabled={!selected}
        />
        <NotificationItem
          mainText="GAMES & STATS"
          imagePath={require('../../../assets/images/teams/premiere-lion.png')}
          disabled={!selected}
        />

        <BebasNeueText
          style={[styles.generalPadding]}
          text="Team Alerts"
          fontSize={24}
        />

        {teams.map((team, index) => (
          <NotificationItem
            key={index}
            mainText={team.name}
            imagePath={team.image}
            disabled={!selected}
          />
        ))}
      </ScrollView>
      <View style={{height: 150}} />
    </View>
  );
};

const styles = StyleSheet.create({
  generalPadding: {
    padding: 20,
  },
  generalBackground: {
    backgroundColor: APP_COLORS.gray10,
  },
});
