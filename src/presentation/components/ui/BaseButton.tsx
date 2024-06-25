import {Pressable, StyleProp, Text, View, ViewStyle} from 'react-native';
import {APP_COLORS, APP_STYLES} from '../../../config';

interface Props {
  text: string;
  capitalize?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: keyof typeof APP_COLORS;
  color?: keyof typeof APP_COLORS;
  opacityBackground?: keyof typeof APP_COLORS;
}

export const BaseButton = ({
  onPress,
  text,
  style,
  capitalize,
  backgroundColor = 'black',
  color = 'black',
  opacityBackground = 'black',
}: Props) => {
  const handleOnPress = () => {
    if (!onPress) return;
    onPress();
  };
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
            borderTopWidth: 25,
            borderBottomWidth: 25,
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
            height: 50,
            flex: 1,
            justifyContent: 'center',
          },
        ]}>
        <Text
          style={[
            {
              color: APP_COLORS[color],
              fontSize: 20,
              textTransform: capitalize ? 'uppercase' : 'none',
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
          borderTopWidth: 25,
          borderBottomWidth: 25,
          borderTopColor: 'transparent',
          borderLeftColor: APP_COLORS[backgroundColor],
          borderRightColor: 'transparent',
          borderBottomColor: 'transparent',
        }}
      />
    </Pressable>
  );
};
