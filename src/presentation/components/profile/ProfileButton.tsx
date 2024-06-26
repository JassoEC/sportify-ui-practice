import {Pressable, StyleProp, View, ViewStyle} from 'react-native';

import {ManropeText} from '../ui/ManropeText';
import {EvilIcon} from '../ui/EvilIcon';

interface Props {
  text: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  marginBottom?: number;
  fontSize?: number;
}

export const ProfileButton = ({
  text,
  onPress,
  marginBottom,
  style,
  fontSize = 24,
}: Props) => {
  return (
    <Pressable
      onPress={() => onPress && onPress()}
      style={({pressed}) => [{opacity: pressed ? 0.7 : 1}]}>
      <View
        style={[
          {flexDirection: 'row', justifyContent: 'space-between', marginBottom},
          style,
        ]}>
        <ManropeText text={text} color="gray80" fontSize={fontSize} />
        <View style={{width: 50, alignContent: 'center', alignItems: 'center'}}>
          <EvilIcon icon="chevron-right" size={35} color="gray60" />
        </View>
      </View>
    </Pressable>
  );
};
