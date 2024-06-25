import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface SampleScreenProps {
  text: string;
  backgroundColor: string;
}
export const SampleScreen = ({text, backgroundColor}: SampleScreenProps) => {
  const {top} = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor,
        paddingTop: top,
      }}>
      <Text>{text}</Text>
    </View>
  );
};

export const SettingsScreen = () => (
  <SampleScreen text="Settings" backgroundColor="blue" />
);

export const HomeScreen = () => (
  <SampleScreen text="Home" backgroundColor="gray" />
);

export const SearchScreen = () => (
  <SampleScreen text="Search" backgroundColor="yellow" />
);

export const ProfileScreen = () => (
  <SampleScreen text="Profile" backgroundColor="green" />
);

export const PostScreen = () => (
  <SampleScreen text="Post" backgroundColor="gray" />
);
