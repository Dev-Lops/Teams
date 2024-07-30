import { Loading } from '@components/Loading';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { Groups } from '@screens/Groups';
import theme from '@theme/index';
import { ThemeProvider } from 'styled-components';

export default function App() {
  const [fontsLoader] = useFonts({
    Roboto_400Regular, Roboto_700Bold,
  })


  return (
    <ThemeProvider theme={theme}>
      {!fontsLoader ? <Groups /> : <Loading />}
    </ThemeProvider>
  )
}
