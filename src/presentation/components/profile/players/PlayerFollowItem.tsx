import {Image, ImageSourcePropType, View} from 'react-native';

import {ManropeText} from '../../ui/ManropeText';
import {SmallButton} from '../../ui/SmallButton';
import {APP_COLORS} from '../../../../config';

interface Props {
  name: string;
  sportName: string;
  text: string;
  imagePath?: ImageSourcePropType;
  buttonWidth?: number;
  icon?: string;
  imageWidth?: number;
  color?: keyof typeof APP_COLORS;
}

export const PlayerFollowItem = ({
  imagePath,
  sportName,
  name,
  buttonWidth = 100,
  icon,
  imageWidth = 60,
  text,
  color = 'gray10',
}: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        height: 90,
      }}>
      <Image
        resizeMode="contain"
        source={imagePath}
        style={{
          width: imageWidth,
          height: imageWidth,
          marginEnd: 15,
        }}
      />
      <View style={{alignItems: 'flex-start', flex: 1}}>
        <ManropeText
          text={name}
          fontSize={15}
          style={{textTransform: 'uppercase'}}
        />
        <ManropeText
          text={sportName}
          fontSize={10}
          style={{textTransform: 'uppercase'}}
        />
      </View>

      <SmallButton
        text={text}
        color={color}
        style={{width: buttonWidth}}
        icon={icon}
      />
    </View>
  );
};
