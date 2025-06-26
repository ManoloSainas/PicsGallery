import { PropsWithChildren } from 'react'
import { StyledButton } from './styled'

type Props = PropsWithChildren<{
  onClick: () => void
  disabled?: boolean
}>

export const Button = ({ children, onClick, disabled = false }: Props) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  )
}
