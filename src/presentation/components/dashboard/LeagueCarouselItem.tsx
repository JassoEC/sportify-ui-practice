import {Image, ImageSourcePropType, View} from 'react-native';

import {APP_COLORS} from '../../../config';
import {ManropeText} from '../ui/ManropeText';

interface Props {
  imagePath: ImageSourcePropType;
  text: string;
}

export const LeagueCarouselItem = ({imagePath, text}: Props) => {
  return (
    <View style={{width: 80, marginEnd: 20}}>
      <View
        style={{
          backgroundColor: APP_COLORS.gray30,
          width: 80,
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={imagePath} />
      </View>
      <ManropeText text={text} fontSize={12} style={{textAlign: 'center'}} />
    </View>
  );
};
