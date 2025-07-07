import styled from 'styled-components'

export const StyledButton = styled.button<{
  $backgroundColor?: string
  $fontSize?: string
  $borderRadius?: string
  $border?: string
  $width?: string
}>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  font-size: ${({ $fontSize }) => $fontSize};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  border: ${({ $border }) => $border};
  width: ${({ $width }) => $width};
  @media (max-width: 376px) {
  }
`
