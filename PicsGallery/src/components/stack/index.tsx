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
  padding?: string
  border?: string
  margin?: string
  borderRadius?: string
  minWidth?: string
  maxWidth?: string
  minHeight?: string
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
  padding,
  border,
  margin,
  borderRadius,
  minWidth,
  maxWidth,
  minHeight,
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
      $padding={padding}
      $border={border}
      $margin={margin}
      $borderRadius={borderRadius}
      $minWidth={minWidth}
      $maxWidth={maxWidth}
      $minHeight={minHeight}
    >
      {children}
    </StyledStack>
  )
}
