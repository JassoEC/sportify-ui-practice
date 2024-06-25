import {Pressable, StyleProp, Text, View, ViewStyle} from 'react-native';

import {appColors, appStyles} from '../../../config';

interface Props {
  text: string;
  backgroundColor?: 'black' | 'pink' | 'gray100';
  capitalize?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export const Button = ({
  text,
  backgroundColor,
  onPress,
  capitalize = true,
  style,
}: Props) => {
  const getBackgroundColor = () => {
    switch (backgroundColor) {
      case 'black':
        return appColors.black;
      case 'pink':
        return appColors.pinkMaybe;
      case 'gray100':
      default:
        return appColors.gray100;
    }
  };

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
            borderRightColor: getBackgroundColor(),
            borderBottomColor: 'transparent',
          },
        ]}
      />
      <View
        style={[
          appStyles.primaryButton,
          {
            backgroundColor: getBackgroundColor(),
            height: 50,
            flex: 1,
            justifyContent: 'center',
          },
        ]}>
        <Text
          style={[
            {
              color: backgroundColor === 'pink' ? 'white' : 'black',
              fontSize: 20,
              textTransform: capitalize ? 'uppercase' : 'none',
            },
            appStyles.appFontBebasNeue,
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
          borderLeftColor: getBackgroundColor(),
          borderRightColor: 'transparent',
          borderBottomColor: 'transparent',
        }}
      />
    </Pressable>
  );
};
