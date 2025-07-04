import styled from 'styled-components'

export const StyledButton = styled.button<{
  $backgroundColor?: string
  $fontSize?: string
  $borderRadius?: string
}>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  font-size: ${({ $fontSize }) => $fontSize};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  @media (max-width: 376px) {
  }
`
