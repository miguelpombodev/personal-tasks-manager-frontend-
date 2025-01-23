import React from "react";

export interface ISelectComponentsProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  name: string;
  children: React.ReactNode;
}
