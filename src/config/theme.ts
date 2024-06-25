import {StyleSheet} from 'react-native';

export const appColors = {
  smoke: '#FAFAFA',
  black: '#150000',
  pinkMaybe: '#FF5050',

  fullWhite: '#FFF',
  gray100: '#D6D5D5',
  gray200: '#ADABAB',
  gray300: '#848181',
  gray400: '#5B5757',
  gray500: '#322D2D',
};

export const appStyles = StyleSheet.create({
  primaryButton: {
    backgroundColor: appColors.pinkMaybe,
    padding: 10,
    alignItems: 'center',
  },
  appFontBebasNeue: {
    fontFamily: 'BebasNeue-Regular',
  },
  appFontMarope: {
    fontFamily: 'Manrope-Regular',
  },
  mainContainer: {
    flex: 1,
    padding: 10,
  },
});
