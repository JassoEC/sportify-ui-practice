import {Image, ImageSourcePropType, Pressable, Text, View} from 'react-native';

interface Props {
  onPress?: () => void;
  imagePath: ImageSourcePropType;
  addMarginEnd?: boolean;
}

export const ImageCarouselItem = ({
  onPress,
  imagePath,
  addMarginEnd = false,
}: Props) => {
  return (
    <Pressable
      style={({pressed}) => ({
        opacity: pressed ? 0.5 : 1,
      })}
      onPress={onPress}>
      <View>
        <Image
          source={imagePath}
          resizeMode="contain"
          style={{
            height: 200,
            marginHorizontal: 10,
            marginEnd: addMarginEnd ? 20 : 0,
          }}
        />
      </View>
    </Pressable>
  );
};
