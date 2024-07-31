import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Alert } from "react-native";

export function NewGroup() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  async function handleNewGroup() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert('Nome do grupo é obrigatório')
      }
      await groupCreate(group)
      navigation.navigate('players', { group })

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message)
      } else {
        Alert.alert('Novo Grupo', 'Houve um erro ao tentar criar o grupo')
        console.error(error)
      }

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