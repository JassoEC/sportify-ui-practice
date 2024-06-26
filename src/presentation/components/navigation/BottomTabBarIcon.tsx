import {View} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {APP_COLORS} from '../../../config';

interface Props {
  focused: boolean;
  icon: string;
}

export const BottomTabBarIcon = ({icon, focused}: Props) => {
  return (
    <View>
      <MaterialIcon
        name={icon}
        size={30}
        style={{color: focused ? APP_COLORS.pinkMaybe : APP_COLORS.black}}
      />
    </View>
  );
};
