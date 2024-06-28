import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  AppTextInput,
  CarouselItem,
  CategoryButton,
  ColorizedLogo,
  DashboardCarousel,
  ImageCarouselItem,
  LeagueCarouselItem,
  MaterialIcon,
} from '../../components';
import {APP_COLORS, APP_STYLES} from '../../../config';
import {DashboardStackParamList} from '../../navigation';

interface Props {}

export const DashboardHomeScreen = ({}: Props) => {
  const {top} = useSafeAreaInsets();

  const navigation = useNavigation<NavigationProp<DashboardStackParamList>>();

  const handleNavigateToArticle = () => {
    navigation.navigate('Article');
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={{...styles.headerWrapper, marginTop: top}}>
        <ColorizedLogo />
        <MaterialIcon icon="notifications" size={30} color="black" />
      </View>
      <View style={styles.searchWrapper}>
        <View style={styles.searchInputContainer}>
          <MaterialIcon icon="search" size={25} color="gray60" />
          <AppTextInput
            placeholder="Team,sport or venue"
            padding={0}
            marginBottom={0}
            style={styles.searchInput}
          />
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          marginVertical: 20,
        }}>
        <CategoryButton text="🔥 Trending" selected />
        <CategoryButton text="⚽ Football" />
        <CategoryButton text="🏀 Basketball" />
        <CategoryButton text="🏈 American Football" />
      </ScrollView>
      <DashboardCarousel>
        <ImageCarouselItem
          imagePath={require('../../../assets/images/dashboard/01.png')}
          onPress={handleNavigateToArticle}
        />
        <ImageCarouselItem
          imagePath={require('../../../assets/images/dashboard/01.png')}
          onPress={handleNavigateToArticle}
        />
        <ImageCarouselItem
          imagePath={require('../../../assets/images/dashboard/01.png')}
          onPress={handleNavigateToArticle}
          addMarginEnd
        />
      </DashboardCarousel>
      <DashboardCarousel title="Fifa World Cup" linkText="View all">
        <CarouselItem
          imagePath={require('../../../assets/images/dashboard/thumb-01.png')}
          title="Brazil vs Argentina"
          text="Watch the highlights from the match between..."
        />
        <CarouselItem
          imagePath={require('../../../assets/images/dashboard/thumb-01.png')}
          title="Brazil vs Argentina"
          text="Watch the highlights from the match between..."
        />
        <CarouselItem
          imagePath={require('../../../assets/images/dashboard/thumb-01.png')}
          title="Brazil vs Argentina"
          text="Watch the highlights from the match between..."
        />
      </DashboardCarousel>
      <DashboardCarousel title="All leagues" linkText="View all">
        <LeagueCarouselItem
          imagePath={require('../../../assets/images/teams/premiere-lion.png')}
          text="Premiere League"
        />

        <LeagueCarouselItem
          imagePath={require('../../../assets/images/teams/brazil-league.png')}
          text="Brazil League"
        />
        <LeagueCarouselItem
          imagePath={require('../../../assets/images/teams/premiere-lion.png')}
          text="Premiere League"
        />

        <LeagueCarouselItem
          imagePath={require('../../../assets/images/teams/brazil-league.png')}
          text="Brazil League"
        />
        <LeagueCarouselItem
          imagePath={require('../../../assets/images/teams/premiere-lion.png')}
          text="Premiere League"
        />

        <LeagueCarouselItem
          imagePath={require('../../../assets/images/teams/brazil-league.png')}
          text="Brazil League"
        />
      </DashboardCarousel>
      <View style={{height: 80}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: APP_COLORS.smoke,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 0,
    ...APP_STYLES.globalHorizontalPadding,
  },
  searchWrapper: {
    paddingVertical: 0,
    marginTop: 10,
    ...APP_STYLES.globalHorizontalPadding,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: APP_COLORS.gray15,
  },
  searchInput: {backgroundColor: APP_COLORS.gray15, marginStart: 20},
});
