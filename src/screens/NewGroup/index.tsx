import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { TextInput } from "react-native";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {
  const navigation = useNavigation()

  const handleNewPlayer = () => {
    navigation.navigate('players', { group: 'Vale' })
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight title="Novo grupo" subtitle="Crie o grupo para adicionar as pessoas" />

        <Input placeholder="Nome do grupo" />

        < Button
          title="Criar"
        onPress={handleNewPlayer}
        />
      </Content>
    </Container>
  )
}