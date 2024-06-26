import {ScrollView, View} from 'react-native';
import {WithHeaderScreenWrapper} from '../../components';
import {TeamFollowItem} from '../../components/profile';
import {APP_COLORS} from '../../../config';

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

export const TeamsScreen = ({}: Props) => {
  return (
    <WithHeaderScreenWrapper
      textHeader="Follow your favorite teams"
      textSubHeader="Get news,game updates highlights and more info on your favorite teams"
      backgroundText="TEAMS"
      showBackButton
      contentPadding={false}>
      <ScrollView style={{backgroundColor: APP_COLORS.gray10}}>
        {teams.map((team, index) => (
          <TeamFollowItem
            imagePath={team.image}
            teamName={team.name}
            text={index % 2 === 0 ? 'Following' : 'Follow'}
            key={`index-${team.name}-${index}`}
          />
        ))}
        <View style={{height: 300}} />
      </ScrollView>
    </WithHeaderScreenWrapper>
  );
};
