import type { TouchableOpacityProps } from "react-native";
import { Container, Title, type ButtonTypeStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps
  title: string
}

export function Button({ type = 'PRIMARY', title, ...rest }: Props) {
  return (
    <Container
      type={type}
      {...rest}
    >
      <Title>
        {title}
      </Title>
    </Container >
  )
}