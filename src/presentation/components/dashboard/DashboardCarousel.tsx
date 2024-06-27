import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {APP_COLORS, APP_STYLES} from '../../../config';
import {PropsWithChildren} from 'react';
import {BebasNeueText} from '../ui/BebasNeueText';
import {ManropeText} from '../ui/ManropeText';
import {EvilIcon} from '../ui/EvilIcon';

interface Props extends PropsWithChildren {
  title?: string;
  linkText?: string;
}

export const DashboardCarousel = ({children, title, linkText}: Props) => {
  return (
    <>
      {title && (
        <View
          style={[
            APP_STYLES.globalPadding,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              alignItems: 'center',
              paddingBottom: 0,
            },
          ]}>
          {title && <BebasNeueText text={title} fontSize={22} />}
          {linkText && (
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <ManropeText text={linkText} fontSize={14} color="pinkMaybe" />
              <EvilIcon icon="chevron-right" size={30} color="pinkMaybe" />
            </View>
          )}
        </View>
      )}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={[APP_STYLES.globalPadding, {paddingBottom: 0, marginTop: 0}]}
        horizontal>
        {children}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        <View
          style={[styles.indictor, {backgroundColor: APP_COLORS.pinkMaybe}]}
        />
        <View style={styles.indictor} />
        <View style={styles.indictor} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  indictor: {
    backgroundColor: APP_COLORS.gray20,
    width: 6,
    height: 6,
    transform: [{rotate: '45deg'}],
    marginEnd: 6,
  },
});
