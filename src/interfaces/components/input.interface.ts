// input.interface.ts
import React from "react";

export interface IInputComponentProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: React.ReactNode;
}
