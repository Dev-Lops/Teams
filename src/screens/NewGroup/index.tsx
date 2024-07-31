import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { TextInput } from "react-native";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function NewGroup() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  const handleNewGroup = () => {
    navigation.navigate('players', { group })
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight title="Novo grupo" subtitle="Crie o grupo para adicionar as pessoas" />

        <Input
          placeholder="Nome do grupo"
          onChangeText={setGroup}
        />

        < Button
          title="Criar"
          onPress={handleNewGroup}
        />
      </Content>
    </Container>
  )
}