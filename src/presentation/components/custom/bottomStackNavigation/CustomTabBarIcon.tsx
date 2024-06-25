import {Text, View} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  focused: boolean;
  icon: string;
  text: string;
}

export const CustomTabBarIcon = ({icon, text, focused}: Props) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        top: 10,
      }}>
      <MaterialIcon
        name={icon}
        size={30}
        style={{color: focused ? '#e32f45' : '#748c94'}}
      />
      <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
        {text}
      </Text>
    </View>
  );
};
