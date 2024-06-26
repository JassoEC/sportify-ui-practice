import {PropsWithChildren} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {APP_COLORS, APP_STYLES} from '../../../config';
import {BebasNeueText} from '../ui/BebasNeueText';
import {ManropeText} from '../ui/ManropeText';
import {EvilIcon} from '../ui/EvilIcon';

interface Props extends PropsWithChildren {
  title?: string;
  linkText?: string;
}

export const DashboardCarousel = ({children, title, linkText}: Props) => {
  return (
    <View style={styles.mainContainer}>
      {title && (
        <View style={styles.titleWrapper}>
          {title && <BebasNeueText text={title} fontSize={22} />}
          {linkText && (
            <View style={styles.linkText}>
              <ManropeText text={linkText} fontSize={14} color="pinkMaybe" />
              <EvilIcon icon="chevron-right" size={30} color="pinkMaybe" />
            </View>
          )}
        </View>
      )}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.contentScroll}
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
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 10,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    ...APP_STYLES.globalHorizontalPadding,
  },
  linkText: {flexDirection: 'row', alignItems: 'flex-end'},
  contentScroll: {
    paddingBottom: 0,
    marginTop: 0,
    ...APP_STYLES.globalHorizontalPadding,
  },
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
