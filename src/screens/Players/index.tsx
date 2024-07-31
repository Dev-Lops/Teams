import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { Alert, FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroup } from "@storage/player/playersGetByGroup";

type RouteParams = {
  group: string;
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState('')
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState([])

  const route = useRoute()
  const { group } = route.params as RouteParams

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
      const players = await playersGetByGroup(group)
      console.log(players)
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Nova Pessoa', error.message)
      } else {
        console.log(error)
        Alert.alert('Nova Pessoa', 'Ocorreu um erro ao adicionar a pessoa!')
      }
    }
  }


  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title={group}
        subtitle="Adcione as pessoas e separe os times" />
      <Form>
        <Input
          onChangeText={setNewPlayerName}
          placeholder="Nome da pessoa"
          autoCorrect={false}
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
        keyExtractor={item => item}
        renderItem={({ item }) =>
          <PlayerCard
            name={item}
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