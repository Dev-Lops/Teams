import { useTheme } from "styled-components/native";
import type { TextInputProps, TextInput } from "react-native";
import { Container } from "./styles";
import type React from "react";

type Props = TextInputProps & {
  inputRef?: React.ForwardedRef<TextInput>;
}

export function Input({ inputRef, ...rest }: Props) {
  const { COLORS } = useTheme()

  return (
    <Container
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  )
}
