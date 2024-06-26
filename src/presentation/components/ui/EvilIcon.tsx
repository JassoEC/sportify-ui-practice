import Icon from 'react-native-vector-icons/EvilIcons';
import {APP_COLORS} from '../../../config';

interface Props {
  icon: string;
  size?: number;
  color?: keyof typeof APP_COLORS;
}

export const EvilIcon = ({icon, size = 30, color = 'gray10'}: Props) => {
  return <Icon name={icon} size={size} color={APP_COLORS[color]} />;
};
