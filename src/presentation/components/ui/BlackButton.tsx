import {StyleProp, ViewStyle} from 'react-native';

import {BaseButton} from './BaseButton';

interface Props {
  text: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export const BlackButton = ({text, onPress, style}: Props) => {
  return (
    <BaseButton
      text={text}
      backgroundColor="black"
      color="gray10"
      onPress={onPress}
      style={style}
    />
  );
};
