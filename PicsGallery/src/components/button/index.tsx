import { PropsWithChildren } from 'react'
import { StyledButton } from './styled'

type Props = PropsWithChildren

export const Button = ({ children }: Props) => {
  return <StyledButton>{children}</StyledButton>
}
