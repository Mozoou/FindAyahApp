import FlashMessage from 'react-native-flash-message';
import Navigation from './src/navigation/Navigation';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'Noto': require('./assets/fonts/Noto-Arabic.ttf'),
    'Alqalam': require('./assets/fonts/Alqalam-Quran.ttf')
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <Navigation></Navigation>
      <FlashMessage position="top" />
    </>
  );
}