import {PropsWithChildren} from 'react';
import {Image, Platform, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {APP_COLORS, APP_STYLES} from '../../../config';
import {BebasNeueText} from '../ui/BebasNeueText';
import {ManropeText} from '../ui/ManropeText';

interface Props extends PropsWithChildren {
  showBackButton?: boolean;
  backgroundText?: string;
  textHeader: string;
  textSubHeader?: string;
}

export const ScreenWrapper = ({
  children,
  textHeader,
  textSubHeader,
  backgroundText,
}: Props) => {
  const {top} = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={[styles.headerContainer]}>
        <Image
          source={require('../../../assets/images/white-logo.png')}
          style={[
            styles.logo,
            {
              top: Platform.OS === 'ios' ? top : top + 30,
            },
          ]}
        />

        <BebasNeueText
          text={textHeader}
          fontSize={24}
          color="gray10"
          style={{marginBottom: 10, textTransform: 'uppercase'}}
        />

        {textSubHeader && (
          <ManropeText
            text={textSubHeader}
            style={[styles.textSubHeader]}
            color="gray10"
            fontSize={14}
          />
        )}

        {backgroundText && (
          <BebasNeueText
            text={backgroundText}
            fontSize={154}
            color="gray10"
            style={[styles.backgroundText]}
          />
        )}
      </View>
      <View style={[APP_STYLES.mainContainer, styles.contentContainer]}>
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
  },
  backgroundText: {
    opacity: 0.2,
    position: 'absolute',
    right: 0,
  },
});
