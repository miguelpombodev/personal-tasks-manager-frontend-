import { IButtonComponentProps } from "../../interfaces/components/button.interface";
import { Container } from "./styles";

function ButtonComponent({
  color,
  title,
  onClick,
  disabled = false,
  type = "button",
  ...props
}: IButtonComponentProps) {
  return (
    <Container
      title={title}
      color={color}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {title}
    </Container>
  );
}

export default ButtonComponent;
