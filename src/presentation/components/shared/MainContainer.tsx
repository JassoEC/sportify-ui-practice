import {PropsWithChildren} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import {appStyles} from '../../../config';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props extends PropsWithChildren {
  style: StyleProp<ViewStyle>;
}

export const MainContainer = ({children, style}: Props) => {
  const {top, bottom} = useSafeAreaInsets();

  return (
    <View
      style={[
        appStyles.mainContainer,
        {
          marginTop: top,
          marginBottom: bottom,
        },
        style,
      ]}>
      {children}
    </View>
  );
};
