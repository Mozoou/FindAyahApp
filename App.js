import 'reflect-metadata';
import FlashMessage from 'react-native-flash-message';
import Navigation from './src/navigation/Navigation';
import { useFonts } from 'expo-font';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'Ubuntu': require('./assets/fonts/Ubuntu-Regular.ttf'),
    'Noto': require('./assets/fonts/Noto-Arabic.ttf'),
    'Alqalam': require('./assets/fonts/Alqalam-Quran.ttf'),
    'NotoNaskhArabic': require('./assets/fonts/NotoNaskhArabic-Regular.ttf')
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <AuthProvider>
      <Navigation></Navigation>
      <FlashMessage position="top" />
    </AuthProvider>
  );
}