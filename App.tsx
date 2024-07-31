import { Loading } from '@components/Loading';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import { Groups } from '@screens/Groups';
import { NewGroup } from '@screens/NewGroup';
import { Players } from '@screens/Players';
import theme from '@theme/index';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

export default function App() {
  const [fontsLoader] = useFonts({
    Roboto_400Regular, Roboto_700Bold,
  })

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        {fontsLoader ? <Groups /> : <Loading />}
      </ThemeProvider>
    </NavigationContainer>
  )
}
