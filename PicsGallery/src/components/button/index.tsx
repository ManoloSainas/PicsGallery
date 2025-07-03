import { PropsWithChildren } from 'react'
import { StyledButton } from './styled'

type Props = PropsWithChildren<{
  onClick: () => void
  disabled?: boolean
  backgroundColor?: string
}>

export const Button = ({
  children,
  onClick,
  disabled = false,
  backgroundColor
}: Props) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      $backgroundColor={backgroundColor}
    >
      {children}
    </StyledButton>
  )
}
