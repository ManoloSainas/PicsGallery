import styled from 'styled-components'

export const StyledButton = styled.button<{ $backgroundColor?: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  @media (max-width: 376px) {
  }
`
