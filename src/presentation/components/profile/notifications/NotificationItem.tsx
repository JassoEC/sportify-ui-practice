import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import {APP_COLORS} from '../../../../config';
import {ManropeText} from '../../ui/ManropeText';

interface Props {
  imagePath: ImageSourcePropType;
  mainText: string;
  secondaryText?: string;
  disabled?: boolean;
}

export const NotificationItem = ({
  imagePath,
  mainText,
  secondaryText,
  disabled = false,
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
        style={{
          width: 45,
          height: 45,
          resizeMode: 'contain',
          marginEnd: 20,
          opacity: disabled ? 0.2 : 1,
        }}
      />
      <View style={{flex: 1}}>
        <ManropeText
          text={mainText}
          fontSize={20}
          style={{color: disabled ? APP_COLORS.gray40 : APP_COLORS.black}}
        />
        {secondaryText && (
          <ManropeText
            text={secondaryText}
            fontSize={14}
            style={{color: disabled ? APP_COLORS.gray40 : APP_COLORS.black}}
          />
        )}
      </View>
      <View
        style={{
          width: 30,
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ManropeText
          text="On"
          fontSize={16}
          style={{
            fontWeight: 'bold',
            color: disabled ? APP_COLORS.gray40 : APP_COLORS.black,
          }}
        />
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
