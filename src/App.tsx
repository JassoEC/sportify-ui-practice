import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {AuthStackNavigation} from './presentation/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {/* <CustomBottomTabsNavigator /> */}
        <AuthStackNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
