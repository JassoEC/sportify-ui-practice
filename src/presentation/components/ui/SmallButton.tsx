import {Pressable, StyleProp, Text, View, ViewStyle} from 'react-native';
import {APP_COLORS, APP_STYLES} from '../../../config';
import {MaterialIcon} from './MaterialIcon';

interface Props {
  text: string;
  capitalize?: boolean;
  onPress?: () => void;
  backgroundColor?: keyof typeof APP_COLORS;
  color?: keyof typeof APP_COLORS;
  opacityBackground?: keyof typeof APP_COLORS;
  fontSize?: number;
  width?: number;
  style?: StyleProp<ViewStyle>;
  icon?: string;
  iconSize?: number;
}

export const SmallButton = ({
  onPress,
  text,
  capitalize,
  backgroundColor = 'black',
  color = 'black',
  opacityBackground = 'black',
  fontSize = 16,
  style,
  icon,
  iconSize = 18,
}: Props) => {
  const handleOnPress = () => {
    if (!onPress) return;
    onPress();
  };

  const height = 36;
  const borderWidth = height / 2;

  return (
    <Pressable
      style={({pressed}) => [
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: pressed ? 0.7 : 1,
        },
        style,
      ]}
      onPress={handleOnPress}>
      <View
        style={[
          {
            width: 0,
            height: 0,
            borderRightWidth: 12,
            borderTopWidth: borderWidth,
            borderBottomWidth: borderWidth,
            borderTopColor: 'transparent',
            borderLeftColor: 'transparent',
            borderRightColor: APP_COLORS[backgroundColor],
            borderBottomColor: 'transparent',
          },
        ]}
      />
      <View
        style={[
          APP_STYLES.button,
          {
            backgroundColor: APP_COLORS[backgroundColor],
            height,
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'row',
          },
        ]}>
        {icon && <MaterialIcon icon={icon} size={iconSize} color={'gray10'} />}

        <Text
          style={[
            {
              color: APP_COLORS[color],
              fontSize,
              textTransform: capitalize ? 'uppercase' : 'none',
              marginStart: icon ? 5 : 0,
            },
            APP_STYLES.appFontBebasNeue,
          ]}>
          {text}
        </Text>
      </View>
      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 12,
          borderTopWidth: borderWidth,
          borderBottomWidth: borderWidth,
          borderTopColor: 'transparent',
          borderLeftColor: APP_COLORS[backgroundColor],
          borderRightColor: 'transparent',
          borderBottomColor: 'transparent',
        }}
      />
    </Pressable>
  );
};
