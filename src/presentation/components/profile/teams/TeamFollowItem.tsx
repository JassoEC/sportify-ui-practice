import {Image, ImageSourcePropType, View} from 'react-native';

import {ManropeText} from '../../ui/ManropeText';
import {SmallButton} from '../../ui/SmallButton';
import {APP_COLORS} from '../../../../config';

interface Props {
  teamName: string;
  text: string;
  imagePath?: ImageSourcePropType;
  buttonWidth?: number;
  icon?: string;
  imageWidth?: number;
  color?: keyof typeof APP_COLORS;
}

export const TeamFollowItem = ({
  imagePath,
  teamName,
  buttonWidth = 100,
  icon,
  imageWidth = 35,
  text,
  color = 'gray10',
}: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 20,
        height: 70,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          resizeMode="contain"
          source={imagePath}
          style={{
            width: imageWidth,
            height: imageWidth,
            marginEnd: 15,
          }}
        />
        <ManropeText
          text={teamName}
          fontSize={16}
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
