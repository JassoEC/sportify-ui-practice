import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import {
  Image,
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {EvilIcon, ManropeText, MaterialIcon} from '../../components';
import {APP_COLORS, APP_STYLES} from '../../../config';

interface Props {}

export const ArticleScreen = ({}: Props) => {
  const {width} = useWindowDimensions();
  const {top} = useSafeAreaInsets();

  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          ...styles.buttonsContainer,
          marginTop: Platform.OS === 'ios' ? top : top + 15,
        }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={({pressed}) => ({
            opacity: pressed ? 0.5 : 1,
          })}>
          <View
            style={{
              ...styles.backButton,
            }}>
            <EvilIcon icon="chevron-left" size={35} color="gray10" />
            <Text style={styles.backButtonText}>Back</Text>
          </View>
        </Pressable>
        <Pressable
          style={({pressed}) => ({
            opacity: pressed ? 0.5 : 1,
          })}>
          <MaterialIcon icon="more-vert" size={30} color="gray10" />
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../../assets/images/dashboard/article-cover.png')}
          style={{...styles.imageCover, width}}
          resizeMode="cover"
        />
        <View style={styles.contentWrapper}>
          <View style={styles.contentTitleWrapper}>
            <ManropeText text="Basketball" color="pinkMaybe" fontSize={14} />
            <ManropeText text="Wed 12/16 " fontSize={14} />
            <ManropeText text="8:30 PM" fontSize={14} />
          </View>
          <Text style={styles.paragraph}>
            We explored the tough decisions regarding the selection of Western
            Conference backcourt players looming later this month once the
            league officially opens voting for the 2023 NBA All-Star Game.
          </Text>
          <Text style={styles.paragraph}>
            So, naturally, it’s time to turn attention to the Eastern
            Conference, which added a couple of 2022 All-Star guards from the
            West in Donovan Mitchell and Dejounte Murray to an already deep pool
            that features a total of 17 All-Star nods between two players —
            James Harden and Kyrie Irving — that aren’t even locks to make this
            year’s squad.
          </Text>
        </View>
        <View style={[styles.contentWrapper, styles.imagesWrapper]}>
          <ImageBackground
            source={require('../../../assets/images/dashboard/article-1.png')}
            style={{
              height: 300,
              flex: 1,
            }}
            resizeMode={'cover'}
          />
          <ImageBackground
            source={require('../../../assets/images/dashboard/article-2.png')}
            style={{
              height: 300,
              flex: 1,
            }}
            resizeMode={'cover'}
          />
        </View>
        <View style={{height: 100}} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  buttonsContainer: {
    position: 'absolute',
    ...APP_STYLES.globalHorizontalPadding,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    zIndex: 1,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    color: APP_COLORS.gray10,
    fontSize: 18,
  },
  imageCover: {
    height: 400,
    zIndex: -1,
  },
  contentWrapper: {
    ...APP_STYLES.globalHorizontalPadding,
    marginTop: 10,
  },
  contentTitleWrapper: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 20,
  },
  imagesWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
});
