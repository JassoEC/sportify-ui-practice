import {StyleSheet} from 'react-native';

export enum APP_COLORS {
  smoke = '#FAFAFA',
  black = '#150000',
  pinkMaybe = '#FF5050',

  gray10 = '#FFF',
  gray15 = '#F4F4F4',
  gray20 = '#D6D5D5',
  gray30 = '#EEEDED',
  gray40 = '#ADABAB',
  gray60 = '#848181',
  gray80 = '#5B5757',
  gray100 = '#322D2D',
}

export const APP_STYLES = StyleSheet.create({
  button: {
    padding: 10,
    alignItems: 'center',
  },
  appFontBebasNeue: {
    fontFamily: 'BebasNeue-Regular',
  },
  appFontMarope: {
    fontFamily: 'Manrope-Regular',
  },
  globalPadding: {
    padding: 20,
  },
  mainContainer: {
    flex: 1,
    padding: 10,
  },
});
