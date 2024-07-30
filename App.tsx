import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { Groups } from '@screens/Groups';
import theme from '@theme/index';
import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components';

export default function App() {
  const [fontsLoader] = useFonts({
    Roboto_400Regular, Roboto_700Bold,
  })


  return (
    <ThemeProvider theme={theme}>
      {fontsLoader ? <Groups /> : <ActivityIndicator />}
    </ThemeProvider>
  )
}
