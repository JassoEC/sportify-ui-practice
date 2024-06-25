import {StyleProp, Text, TextStyle} from 'react-native';
import {APP_COLORS, APP_STYLES} from '../../../config';

interface Props {
  text: string;
  fontSize?: number;
  style?: StyleProp<TextStyle>;
  color?: keyof typeof APP_COLORS;
}

export const BebasNeueText = ({
  text,
  fontSize = 12,
  style,
  color = 'gray100',
}: Props) => {
  return (
    <Text
      style={[
        {
          fontSize,
          color: APP_COLORS[color],
        },
        APP_STYLES.appFontBebasNeue,
        style,
      ]}>
      {text}
    </Text>
  );
};
