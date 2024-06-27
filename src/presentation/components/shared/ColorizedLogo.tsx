import {Image} from 'react-native';

interface Props {
  width?: number;
}
export const ColorizedLogo = ({width = 140}: Props) => {
  return (
    <Image
      source={require('../../../assets/images/top-logo-colorized.png')}
      style={{width}}
      resizeMode="contain"
    />
  );
};
