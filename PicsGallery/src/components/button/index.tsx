import { PropsWithChildren } from 'react'
import { StyledButton } from './styled'

type Props = PropsWithChildren<{
  onClick: () => void
  disabled?: boolean
  backgroundColor?: string
  fontSize?: string
  borderRadius?: string
  border?: string
  width?: string
  color?: string
  active?: boolean
}>

export const Button = ({
  children,
  onClick,
  disabled = false,
  fontSize,
  borderRadius,
  backgroundColor,
  border,
  width,
  color,
  active = undefined
}: Props) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      $backgroundColor={backgroundColor}
      $fontSize={fontSize}
      $borderRadius={borderRadius}
      $border={border}
      $width={width}
      $color={color}
      active={active}
    >
      {children}
    </StyledButton>
  )
}
