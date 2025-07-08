import styled from 'styled-components'

export const StyledStack = styled.div<{
  $display?: string
  $justifyContent?: string
  $alignItems?: string
  $height?: string
  $width?: string
  $flexDirection?: string
  $gap?: string
  $backgroundColor?: string
  $padding?: string
  $border?: string
  $margin?: string
  $borderRadius?: string
  $minWidth?: string
}>`
  display: ${({ $display }) => $display || 'flex'};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  gap: ${({ $gap }) => $gap};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  padding: ${({ $padding }) => $padding};
  border: ${({ $border }) => $border};
  margin: ${({ $margin }) => $margin};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  min-width: ${({ $minWidth }) => $minWidth};
`
