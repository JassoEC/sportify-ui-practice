import {ScrollView, View} from 'react-native';
import {WithHeaderScreenWrapper} from '../../components';
import {PlayerFollowItem} from '../../components/profile';
import {APP_COLORS} from '../../../config';

interface Props {}

const teams = [
  {
    name: 'Steven Adams',
    sportName: 'Football #51F',
    image: require('../../../assets/images/players/01.png'),
  },
  {
    name: 'Santi Aldama',
    sportName: 'Football #51F',
    image: require('../../../assets/images/players/02.png'),
  },
  {
    name: 'Steven Adams',
    sportName: 'Football #51F',
    image: require('../../../assets/images/players/01.png'),
  },
  {
    name: 'Santi Aldama',
    sportName: 'Football #51F',
    image: require('../../../assets/images/players/02.png'),
  },
  {
    name: 'Steven Adams',
    sportName: 'Football #51F',
    image: require('../../../assets/images/players/01.png'),
  },
  {
    name: 'Santi Aldama',
    sportName: 'Football #51F',
    image: require('../../../assets/images/players/02.png'),
  },
];

export const PlayersScreen = ({}: Props) => {
  return (
    <WithHeaderScreenWrapper
      textHeader="Follow your favorite players"
      textSubHeader="Get news,game updates highlights and more info on your favorite players"
      backgroundText="Players"
      showBackButton
      contentPadding={false}
      style={{paddingBottom: 15, height: 279}}>
      <ScrollView style={{backgroundColor: APP_COLORS.smoke}}>
        {teams.map((team, index) => (
          <PlayerFollowItem
            imagePath={team.image}
            name={team.name}
            sportName={team.sportName}
            icon={'check'}
            buttonWidth={130}
            text={'following'}
            key={`index-${team.name}-${index}`}
          />
        ))}
        <View style={{height: 150}} />
      </ScrollView>
    </WithHeaderScreenWrapper>
  );
};
