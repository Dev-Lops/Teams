import { Alert, FlatList, type TextInput } from "react-native";
import { useCallback, useRef, useState } from "react";
import { useFocusEffect, useRoute } from "@react-navigation/native";

import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playerGetByGroupAndTeam } from "@storage/player/playerGetByGroupAndTeam";
import type { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";

import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";



type RouteParams = {
  group: string;
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState('')
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])

  const route = useRoute()
  const { group } = route.params as RouteParams

  const newPlayerNameInputRef = useRef<TextInput>(null)

  async function handleAddNewPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert('Nova Pessoa', 'Informe o nome da pessoa para adicionar!')
    }
    const newPlayer = {
      name: newPlayerName,
      team,
    }
    try {
      await playerAddByGroup(newPlayer, group)
      newPlayerNameInputRef.current?.blur()
      setNewPlayerName('')
      fetchPlayersByTeam()
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Nova Pessoa', error.message)
      } else {
        console.log(error)
        Alert.alert('Nova Pessoa', 'Ocorreu um erro ao adicionar a pessoa!')
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playerGetByGroupAndTeam(group, team)
      setPlayers(playersByTeam)

    } catch (error) {
      console.error(error)
      Alert.alert('Time', 'Não foi possivel caregar as pessoas!')
    }
  }

  useFocusEffect(useCallback(() => {
    fetchPlayersByTeam()
  }, [team]));


  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title={group}
        subtitle="Adcione as pessoas e separe os times" />
      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onSubmitEditing={handleAddNewPlayer}
          returnKeyType="done"
        />
        <ButtonIcon
          icon='add'
          onPress={handleAddNewPlayer}
        />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) =>
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          }
          horizontal
        />
        <NumbersOfPlayers>
          {players.length}
        </NumbersOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={item => item.name}
        renderItem={({ item }) =>
          <PlayerCard
            name={item.name}
            onRemove={() => { }}
          />
        }
        ListEmptyComponent={() => (
          <ListEmpty
            message="Não há pessoas nesse time"
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 }
        ]}
      />

      <Button title="Remover Grupo" type="SECONDARY" />
    </Container>
  )
}