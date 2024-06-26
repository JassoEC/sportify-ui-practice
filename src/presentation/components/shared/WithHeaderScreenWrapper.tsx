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

        <BebasNeueText
          text={textHeader}
          fontSize={24}
          color="gray10"
          style={{
            marginBottom: 10,
            textTransform: 'uppercase',
            maxWidth: '40%',
          }}
        />

        {textSubHeader && (
          <ManropeText
            text={textSubHeader}
            style={[styles.textSubHeader]}
            color="gray10"
            fontSize={14}
          />
        )}

        {additionalHeaderContent && additionalHeaderContent}

        {backgroundText && (
          <BebasNeueText
            text={backgroundText}
            fontSize={144}
            color="gray10"
            style={[styles.backgroundText, {maxWidth: '75%'}]}
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
      <View style={[contentPadding ? APP_STYLES.globalPadding : null]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: APP_COLORS.pinkMaybe,
    height: 246,
    width: '100%',
    padding: 20,
    justifyContent: 'flex-end',
  },
  logo: {
    width: 140,
    position: 'absolute',
    marginLeft: 10,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: APP_COLORS.smoke,
  },
  textSubHeader: {
    fontWeight: '300',
    maxWidth: '70%',
  },
  backgroundText: {
    opacity: 0.1,
    position: 'absolute',
    right: 0,
  },
});
