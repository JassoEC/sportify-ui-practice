import {Pressable, StyleProp, View, ViewStyle} from 'react-native';

import {BebasNeueText} from '../ui/BebasNeueText';
import {ManropeText} from '../ui/ManropeText';
import {MaterialIcon} from '../ui/MaterialIcon';

interface Props {
  text: string;
  secondText: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  marginBottom?: number;
  fontSize?: number;
}

export const ProfileWithTitleButton = ({
  text,
  secondText,
  onPress,
  marginBottom,
  style,
  fontSize = 24,
}: Props) => {
  return (
    <View style={[{flexDirection: 'row', marginBottom}, style]}>
      <View style={{flex: 1}}>
        <BebasNeueText text={text} fontSize={fontSize} />
        <ManropeText text={secondText} color="gray80" fontSize={15} />
      </View>
      <Pressable
        onPress={() => onPress && onPress()}
        style={({pressed}) => [{opacity: pressed ? 0.7 : 1}]}>
        <View style={{width: 50, alignContent: 'center', alignItems: 'center'}}>
          <MaterialIcon icon="add" size={35} color="black" />
        </View>
      </Pressable>
    </View>
  );
};
