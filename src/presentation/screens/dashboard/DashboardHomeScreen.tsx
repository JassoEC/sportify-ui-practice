import {Image, ScrollView, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  AppTextInput,
  BebasNeueText,
  ColorizedLogo,
  DashboardCarousel,
  ManropeText,
  MaterialIcon,
  SmallButton,
} from '../../components';
import {APP_COLORS, APP_STYLES} from '../../../config';

interface Props {}

export const DashboardHomeScreen = ({}: Props) => {
  const {top} = useSafeAreaInsets();
  return (
    <ScrollView
      style={{
        backgroundColor: APP_COLORS.smoke,
      }}>
      <View
        style={[
          APP_STYLES.globalPadding,
          {
            marginTop: top,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 0,
          },
        ]}>
        <ColorizedLogo />
        <MaterialIcon icon="notifications" size={30} color="black" />
      </View>
      <View
        style={[APP_STYLES.globalPadding, {paddingVertical: 0, marginTop: 10}]}>
        <View
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              alignContent: 'center',
              paddingHorizontal: 20,
              backgroundColor: APP_COLORS.gray15,
            },
          ]}>
          <MaterialIcon icon="search" size={25} color="gray60" />
          <AppTextInput
            placeholder="Team,sport or venue"
            padding={0}
            marginBottom={0}
            style={[{backgroundColor: APP_COLORS.gray15, marginStart: 20}]}
          />
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          marginTop: 20,
        }}>
        <SmallButton
          text="🔥 Trending"
          color="gray10"
          fontSize={14}
          height={40}
          backgroundColor="black"
          style={{marginHorizontal: 5}}
        />
        <SmallButton
          text="⚽ Football"
          color="black"
          fontSize={14}
          height={40}
          backgroundColor="gray15"
          style={{marginHorizontal: 5}}
        />
        <SmallButton
          text="🏀 Basketball"
          color="black"
          fontSize={14}
          height={40}
          backgroundColor="gray15"
          style={{marginHorizontal: 5}}
        />
        <SmallButton
          text="🏈 American Football"
          color="black"
          fontSize={14}
          height={40}
          backgroundColor="gray15"
          style={{marginHorizontal: 5}}
        />
      </ScrollView>
      <DashboardCarousel>
        <Image
          source={require('../../../assets/images/dashboard/01.png')}
          resizeMode="contain"
        />
      </DashboardCarousel>
      <DashboardCarousel title="Fifa World Cup" linkText="View all">
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            padding: 10,
          }}>
          <Image
            source={require('../../../assets/images/dashboard/thumb-01.png')}
          />
          <View style={{padding: 10, marginStart: 5}}>
            <ManropeText
              text="Highlights"
              fontSize={12}
              style={{
                backgroundColor: APP_COLORS.gray15,
                padding: 4,
                paddingHorizontal: 6,
                width: 70,
                marginBottom: 2,
              }}
            />
            <BebasNeueText text="Brazil vs Argentina" fontSize={18} />
            <ManropeText
              text="Watch the highlights from the match between..."
              fontSize={12}
              style={{color: APP_COLORS.gray60, width: 150}}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            padding: 10,
          }}>
          <Image
            source={require('../../../assets/images/dashboard/thumb-01.png')}
          />
          <View style={{padding: 10, marginStart: 5}}>
            <ManropeText
              text="Highlights"
              fontSize={12}
              style={{
                backgroundColor: APP_COLORS.gray15,
                padding: 4,
                paddingHorizontal: 6,
                width: 70,
                marginBottom: 2,
              }}
            />
            <BebasNeueText text="Brazil vs Argentina" fontSize={18} />
            <ManropeText
              text="Watch the highlights from the match between..."
              fontSize={12}
              style={{color: APP_COLORS.gray60, width: 150}}
            />
          </View>
        </View>
      </DashboardCarousel>
      <DashboardCarousel title="All leagues" linkText="View all">
        <View style={{width: 80, marginEnd: 20}}>
          <View
            style={{
              backgroundColor: APP_COLORS.gray30,
              width: 80,
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../assets/images/teams/premiere-lion.png')}
            />
          </View>
          <ManropeText
            text="Premiere League"
            fontSize={12}
            style={{textAlign: 'center'}}
          />
        </View>
        <View style={{width: 80, marginEnd: 20}}>
          <View
            style={{
              backgroundColor: APP_COLORS.gray30,
              width: 80,
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../assets/images/teams/brazil-league.png')}
            />
          </View>
          <ManropeText
            text="Premiere League"
            fontSize={12}
            style={{textAlign: 'center'}}
          />
        </View>
        <View style={{width: 80, marginEnd: 20}}>
          <View
            style={{
              backgroundColor: APP_COLORS.gray30,
              width: 80,
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../assets/images/teams/premiere-lion.png')}
            />
          </View>
          <ManropeText
            text="Premiere League"
            fontSize={12}
            style={{textAlign: 'center'}}
          />
        </View>
        <View style={{width: 80, marginEnd: 20}}>
          <View
            style={{
              backgroundColor: APP_COLORS.gray30,
              width: 80,
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../assets/images/teams/brazil-league.png')}
            />
          </View>
          <ManropeText
            text="Premiere League"
            fontSize={12}
            style={{textAlign: 'center'}}
          />
        </View>
        <View style={{width: 80, marginEnd: 20}}>
          <View
            style={{
              backgroundColor: APP_COLORS.gray30,
              width: 80,
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../assets/images/teams/premiere-lion.png')}
            />
          </View>
          <ManropeText
            text="Premiere League"
            fontSize={12}
            style={{textAlign: 'center'}}
          />
        </View>
        <View style={{width: 80, marginEnd: 20}}>
          <View
            style={{
              backgroundColor: APP_COLORS.gray30,
              width: 80,
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../assets/images/teams/brazil-league.png')}
            />
          </View>
          <ManropeText
            text="Premiere League"
            fontSize={12}
            style={{textAlign: 'center'}}
          />
        </View>
        <View style={{width: 80, marginEnd: 20}}>
          <View
            style={{
              backgroundColor: APP_COLORS.gray30,
              width: 80,
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../assets/images/teams/premiere-lion.png')}
            />
          </View>
          <ManropeText
            text="Premiere League"
            fontSize={12}
            style={{textAlign: 'center'}}
          />
        </View>
        <View style={{width: 80, marginEnd: 20}}>
          <View
            style={{
              backgroundColor: APP_COLORS.gray30,
              width: 80,
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../assets/images/teams/brazil-league.png')}
            />
          </View>
          <ManropeText
            text="Premiere League"
            fontSize={12}
            style={{textAlign: 'center'}}
          />
        </View>
      </DashboardCarousel>
      <View style={{height: 50}} />
    </ScrollView>
  );
};
