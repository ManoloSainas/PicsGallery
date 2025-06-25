import { PropsWithChildren } from 'react'
import { StyledStack } from './styled'

type Props = PropsWithChildren<{
  display?: string
  justifyContent?: string
  alignItems?: string
  height?: string
  width?: string
  flexDirection?: string
}>

export const Stack = ({
  display = 'flex',
  justifyContent,
  alignItems,
  height,
  width,
  flexDirection,
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
    >
      {children}
    </StyledStack>
  )
}
