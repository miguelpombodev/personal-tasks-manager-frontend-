import { forwardRef } from "react"
import * as S from "./styles"
import { ISelectComponentsProps } from "../../interfaces/components/select.interface"

const SelectComponent = forwardRef<HTMLSelectElement, ISelectComponentsProps>(
  ({name, children, ...props}, ref) => {

  return (
  <S.Container ref={ref} name={name} {...props}>
    {children}
  </S.Container>
  )
})

export default SelectComponent