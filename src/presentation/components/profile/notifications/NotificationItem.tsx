import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import {APP_COLORS} from '../../../../config';
import {ManropeText} from '../../ui/ManropeText';

interface Props {
  imagePath: ImageSourcePropType;
  mainText: string;
  secondaryText?: string;
}

export const NotificationItem = ({
  imagePath,
  mainText,
  secondaryText,
}: Props) => {
  return (
    <View
      style={[
        styles.generalPadding,
        styles.generalBackground,
        {flexDirection: 'row', alignItems: 'center'},
      ]}>
      <Image
        source={imagePath}
        style={{width: 45, height: 45, resizeMode: 'contain', marginEnd: 20}}
      />
      <View style={{flex: 1}}>
        <ManropeText text={mainText} fontSize={20} />
        {secondaryText && <ManropeText text={secondaryText} fontSize={14} />}
      </View>
      <View
        style={{
          width: 30,
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ManropeText text="On" fontSize={16} style={{fontWeight: 'bold'}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  generalPadding: {
    padding: 20,
  },
  generalBackground: {
    backgroundColor: APP_COLORS.gray10,
  },
});
