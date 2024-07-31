import { Header } from '@components/Header';
import * as S from './styles';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { groupsGetAll } from '@storage/group/groupsGetAll';


export function Groups() {
  const [group, setGroup] = useState<string[]>([])
  const navigation = useNavigation()

  const handleNewGroup = () => {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll()
      setGroup(data);
    } catch (error) {
      console.log(error)
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []));

  return (
    <S.Container>
      <Header />
      <Highlight
        title='Grupos'
        subtitle='Forme seu grupo e divirta-se!' />


      <FlatList
        data={group}
        keyExtractor={item => item}
        renderItem={({ item }) =>
          <GroupCard
            title={item}
            onPress={() => handleOpenGroup(item)}
          />}
        contentContainerStyle={group.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty message="Nenhum grupo cadastrado!"
          />
        }
      />
      <Button
        title='Criar novo grupo'
        onPress={handleNewGroup}
      />

    </S.Container>
  );
}