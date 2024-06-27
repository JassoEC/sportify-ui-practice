import {SmallButton} from '../ui/SmallButton';

interface Props {
  text: string;
  selected?: boolean;
  onPress?: () => void;
}

export const CategoryButton = ({text, selected, onPress}: Props) => {
  return (
    <SmallButton
      onPress={onPress}
      text={text}
      color={selected ? 'gray10' : 'black'}
      fontSize={14}
      height={40}
      backgroundColor={selected ? 'black' : 'gray10'}
      style={{marginHorizontal: 5}}
    />
  );
};
