import styled from 'styled-components'

export const StyledStack = styled.div<{
  $display?: string
  $justifyContent?: string
  $alignItems?: string
  $height?: string
  $width?: string
  $flexDirection?: string
}>`
  display: ${({ $display }) => $display || 'flex'};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
  flex-direction: ${({ $flexDirection }) => $flexDirection};
`
