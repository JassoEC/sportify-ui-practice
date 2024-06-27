import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import {Pressable, View} from 'react-native';

import {APP_COLORS} from '../../../config';

interface Props extends BottomTabBarButtonProps {
  leftBorder?: boolean;
  rightBorder?: boolean;
}

export const SportifyTabBarButton = ({
  children,
  leftBorder,
  rightBorder,
  onPress,
}: Props) => {
  const height = 48;
  const borderWidth = height / 2 + 1;
  const backgroundColor = APP_COLORS.gray10;
  return (
    <>
      {leftBorder && (
        <View
          style={{
            width: 0,
            height: 0,
            borderRightWidth: 12,
            borderTopWidth: borderWidth,
            borderBottomWidth: borderWidth,
            borderTopColor: 'transparent',
            borderLeftColor: 'transparent',
            borderRightColor: backgroundColor,
            borderBottomColor: 'transparent',
          }}
        />
      )}
      <Pressable
        onPress={onPress}
        style={{flex: 1, backgroundColor: backgroundColor, height}}>
        {children}
      </Pressable>
      {rightBorder && (
        <View
          style={{
            width: 0,
            height: 0,
            borderLeftWidth: 12,
            borderTopWidth: borderWidth,
            borderBottomWidth: borderWidth,
            borderTopColor: 'transparent',
            borderLeftColor: backgroundColor,
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
          }}
        />
      )}
    </>
  );
};
