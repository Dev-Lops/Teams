import { Header } from '@components/Header';
import * as S from './styles';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';

export function Groups() {
  const [group, setGroup] = useState<string[]>(['Vale de Benção', 'Rua das guarubas', 'São josé operário'])

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

      />
    </S.Container>
  );
}