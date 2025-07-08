import styled from 'styled-components'

export const StyledText = styled.h1<{ $color?: string }>`
  color: ${({ $color }) => $color};
  @media (max-width: 376px) {
  }
`
