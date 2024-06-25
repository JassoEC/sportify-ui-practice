import {StyleProp, ViewStyle} from 'react-native';

import {BaseButton} from './BaseButton';

interface Props {
  text: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export const GrayButton = ({text, onPress, style}: Props) => {
  return (
    <BaseButton
      text={text}
      backgroundColor="gray20"
      color="black"
      onPress={onPress}
      style={style}
    />
  );
};
