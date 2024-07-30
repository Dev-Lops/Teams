import { Header } from '@components/Header';
import * as S from './styles';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export function Groups() {
  const [group, setGroup] = useState([])

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
          />}
        contentContainerStyle={group.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty message="Nenhum grupo cadastrado!"
          />
        }
      />
      <Button
        title='Criar novo grupo'
      />

    </S.Container>
  );
}