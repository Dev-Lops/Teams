import { Header } from '@components/Header';
import * as S from './styles';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';

export function Groups() {
  const [teams, setTeams] = useState<string[]>(['Vale de Benção', 'Rua das guarubas', 'São josé operário'])

  return (
    <S.Container>
      <Header />
      <Highlight
        title='Equipes'
        subtitle='Forme sua equipe e divirta-se!' />

      <FlatList
        data={teams}
        keyExtractor={item => item}
        renderItem={({ item }) =>
          <GroupCard
            title={item}
          />}

      />
    </S.Container>
  );
}