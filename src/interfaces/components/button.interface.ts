export interface IButtonComponentProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: "primary" | "secondary" | "cancel";
  title: string;
  size: "short" | "full";
}
