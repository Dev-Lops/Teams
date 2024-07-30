import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { TextInput } from "react-native";
import { Input } from "@components/Input";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight title="Novo grupo" subtitle="Crie o grupo para adicionar as pessoas" />

        <Input placeholder="Nome do grupo" />

        < Button title="Criar" />
      </Content>
    </Container>
  )
}