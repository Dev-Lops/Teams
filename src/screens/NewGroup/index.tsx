import { groupCreate } from "@storage/group/groupCreate";

import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function NewGroup() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  async function handleNewGroup() {
    try {
      await groupCreate(group)
      navigation.navigate('players', { group })

    } catch (error) {
      console.error(error)
    }
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