import { darken } from "polished";
import { styled } from "styled-components";

interface ButtonColorProps {
  color: "primary" | "secondary" | "cancel";
}

export const Container = styled.button<ButtonColorProps>`
  border: none;
  padding: 10px 10px;
  background-color: ${({ theme, color }) => {
    switch (color) {
      case "primary":
        return theme.colors.primary;
      case "secondary":
        return theme.colors.secondary;
      case "cancel":
        return theme.colors.cancel;
    }
  }};

  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme, color }) => {
      switch (color) {
        case "primary":
          return darken(0.1, theme.colors.primary);
        case "secondary":
          return darken(0.1, theme.colors.secondary);
        case "cancel":
          return darken(0.1, theme.colors.cancel);
      }
    }};
  }
`;
