import {Pressable, StyleProp, View, ViewStyle} from 'react-native';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  props: BottomTabBarButtonProps;
  styles: StyleProp<ViewStyle>;
}

export const CustomTabBarButton = ({props, styles}: Props) => {
  return (
    <Pressable
      {...props}
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={[
          {
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#e32f45',
            justifyContent: 'center',
            alignItems: 'center',
          },
          styles,
        ]}>
        <MaterialIcon name="add" size={50} color={'white'} />
      </View>
    </Pressable>
  );
};
