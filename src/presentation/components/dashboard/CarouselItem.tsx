import {Image, ImageSourcePropType} from 'react-native';
import {View} from 'react-native';
import {ManropeText} from '../ui/ManropeText';
import {APP_COLORS} from '../../../config';
import {BebasNeueText} from '../ui/BebasNeueText';

interface Props {
  imagePath: ImageSourcePropType;
  title: string;
  text: string;
}

export const CarouselItem = ({imagePath, title, text}: Props) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 10,
      }}>
      <Image source={imagePath} />
      <View style={{padding: 10, marginStart: 5}}>
        <ManropeText
          text="Highlights"
          fontSize={12}
          style={{
            backgroundColor: APP_COLORS.gray15,
            padding: 4,
            paddingHorizontal: 6,
            width: 70,
            marginBottom: 2,
          }}
        />
        <BebasNeueText text={title} fontSize={18} />
        <ManropeText
          text={text}
          fontSize={12}
          style={{color: APP_COLORS.gray60, width: 150}}
        />
      </View>
    </View>
  );
};
