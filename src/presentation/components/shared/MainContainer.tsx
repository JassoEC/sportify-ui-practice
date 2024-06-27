import {PropsWithChildren} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import {APP_STYLES} from '../../../config';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
  safeArea?: boolean;
}

export const MainContainer = ({children, style, safeArea}: Props) => {
  const {top, bottom} = useSafeAreaInsets();

  return (
    <View
      style={[
        APP_STYLES.mainContainer,
        {
          marginTop: safeArea ? top : 0,
          marginBottom: safeArea ? bottom : 0,
        },
        style,
      ]}>
      {children}
    </View>
  );
};
