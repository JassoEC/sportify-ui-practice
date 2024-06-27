import {KeyboardType, StyleProp, TextInput, ViewStyle} from 'react-native';
import {APP_COLORS} from '../../../config';

interface Props {
  secureEntry?: boolean;
  keyboardType?: KeyboardType;
  placeholder?: string;
  height?: number;
  marginBottom?: number;
  padding?: number;
  style?: StyleProp<ViewStyle>;
  color?: keyof typeof APP_COLORS;
  backgroundColor?: keyof typeof APP_COLORS;
}

export const AppTextInput = ({
  placeholder,
  height = 48,
  marginBottom = 15,
  padding = 10,
  secureEntry = false,
  keyboardType = 'default',
  style,
  color = 'gray80',
  backgroundColor = 'gray30',
}: Props) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={[
        {
          height,
          marginBottom,
          backgroundColor: APP_COLORS[backgroundColor],
          color: APP_COLORS[color],
          padding,
        },
        style,
      ]}
      secureTextEntry={secureEntry}
      keyboardType={keyboardType}
    />
  );
};
