import { PropsWithChildren } from 'react'
import { StyledStack } from './styled'

type Props = PropsWithChildren<{
  display?: string
  justifyContent?: string
  alignItems?: string
  height?: string
  width?: string
  flexDirection?: string
  gap?: string
  backgroundColor?: string
}>

export const Stack = ({
  display,
  justifyContent = 'start',
  alignItems = 'start',
  height = 'max-content',
  width,
  flexDirection = 'row',
  gap,
  backgroundColor,
  children
}: Props) => {
  return (
    <StyledStack
      $display={display}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $height={height}
      $width={width}
      $flexDirection={flexDirection}
      $gap={gap}
      $backgroundColor={backgroundColor}
    >
      {children}
    </StyledStack>
  )
}
