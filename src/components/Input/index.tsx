import { forwardRef } from "react";
import { IInputComponentProps } from "../../interfaces/components/input.interface";
import { Container, InputElement } from "./styles";


const InputComponent = forwardRef<HTMLInputElement, IInputComponentProps>(
  ({ icon, ...props }, ref) => {
    return (
      <Container>
        {icon}
        <InputElement ref={ref} {...props} />
      </Container>
    );
  }
);

export default InputComponent;