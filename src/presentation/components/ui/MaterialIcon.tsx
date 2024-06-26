import Icon from 'react-native-vector-icons/MaterialIcons';
import {APP_COLORS} from '../../../config';

interface Props {
  icon: string;
  size?: number;
  color?: keyof typeof APP_COLORS;
}

export const MaterialIcon = ({icon, size = 30, color = 'black'}: Props) => {
  return <Icon name={icon} size={size} style={{color: APP_COLORS[color]}} />;
};
