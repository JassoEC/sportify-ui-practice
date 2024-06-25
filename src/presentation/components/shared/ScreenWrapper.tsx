import {PropsWithChildren} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props extends PropsWithChildren {}

export const ScreenWrapper = ({children}: Props) => {
  const {top, bottom} = useSafeAreaInsets();
  return (
    <View
      style={{
        // marginTop: top, marginBottom: bottom,
        flex: 1,
      }}>
      {children}
    </View>
  );
};
