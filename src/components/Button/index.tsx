import { Container } from "./styles";

interface IButtonComponentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: "primary" | "secondary" | "cancel",
  title: string,
}

function ButtonComponent({color, title, onClick, ...props}: IButtonComponentProps) {
  return (
    <Container color={color} onClick={onClick} {...props}>{title}</Container>
  )
}

export default ButtonComponent;