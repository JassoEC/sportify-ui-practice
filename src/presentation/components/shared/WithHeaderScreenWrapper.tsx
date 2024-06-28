import {PropsWithChildren, ReactNode} from 'react';
import {
  Image,
  Platform,
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {APP_COLORS, APP_STYLES} from '../../../config';
import {BebasNeueText} from '../ui/BebasNeueText';
import {ManropeText} from '../ui/ManropeText';
import {EvilIcon} from '../ui/EvilIcon';

interface Props extends PropsWithChildren {
  showBackButton?: boolean;
  backgroundText?: string;
  textHeader: string;
  textSubHeader?: string;
  additionalHeaderContent?: ReactNode;
  style?: StyleProp<ViewStyle>;
  contentPadding?: boolean;
  textHeaderFontSize?: number;
  textSubHeaderFontSize?: number;
}

export const WithHeaderScreenWrapper = ({
  children,
  textHeader,
  textSubHeader,
  backgroundText,
  additionalHeaderContent,
  showBackButton,
  style,
  contentPadding = true,
  textHeaderFontSize = 28,
  textSubHeaderFontSize = 14,
}: Props) => {
  const {top} = useSafeAreaInsets();

  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={[styles.headerContainer, style]}>
        {!showBackButton && (
          <Image
            source={require('../../../assets/images/white-logo.png')}
            style={[
              styles.logo,
              {
                top: Platform.OS === 'ios' ? top : top + 30,
              },
            ]}
          />
        )}

        {showBackButton && (
          <Pressable
            onPress={() => navigation.goBack()}
            style={({pressed}) => ({
              position: 'absolute',
              top: Platform.OS === 'ios' ? top : top + 30,
              opacity: pressed ? 0.7 : 1,
            })}>
            <EvilIcon icon="chevron-left" size={50} color="gray10" />
          </Pressable>
        )}

        {/* Text header */}
        <BebasNeueText
          text={textHeader}
          fontSize={textHeaderFontSize}
          color="gray10"
          style={styles.textHeader}
        />

        {/* Text subheader */}
        {textSubHeader && (
          <ManropeText
            text={textSubHeader}
            style={[styles.textSubHeader]}
            color="gray10"
            fontSize={textSubHeaderFontSize}
          />
        )}

        {additionalHeaderContent && additionalHeaderContent}

        {/* Background text */}
        {backgroundText && (
          <BebasNeueText
            text={backgroundText}
            fontSize={128}
            color="gray10"
            style={[styles.backgroundText]}
          />
        )}

        {!backgroundText && (
          <Image
            source={require('../../../assets/images/lines.png')}
            resizeMode="center"
            style={{
              resizeMode: 'contain',
              position: 'absolute',
              zIndex: -1,
              right: 0,
            }}
          />
        )}
      </View>
      <View
        style={[
          {backgroundColor: APP_COLORS.smoke},
          contentPadding ? styles.contentContainer : null,
        ]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: APP_COLORS.pinkMaybe,
    height: 246,
    ...APP_STYLES.globalHorizontalPadding,
    justifyContent: 'flex-end',
  },
  logo: {
    width: 140,
    position: 'absolute',
    marginLeft: 10,
  },
  contentContainer: {
    flex: 1,
    ...APP_STYLES.globalHorizontalPadding,
    paddingVertical: 20,
  },
  textHeader: {
    marginBottom: 10,
    textTransform: 'uppercase',
    maxWidth: '60%',
  },
  textSubHeader: {
    fontWeight: '300',
    maxWidth: '80%',
  },
  backgroundText: {
    opacity: 0.1,
    position: 'absolute',
    letterSpacing: 0,
    right: 0,
    top: '30%',
  },
});
