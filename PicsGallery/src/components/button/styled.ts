import styled from 'styled-components'

export const StyledButton = styled.button<{
  $backgroundColor?: string
  $fontSize?: string
  $borderRadius?: string
  $border?: string
  $width?: string
  $color?: string
  active?: boolean
}>`
  background-color: ${({ active, $backgroundColor }) =>
    active !== undefined
      ? active
        ? '#c4ffd5'
        : 'white'
      : ($backgroundColor ?? 'white')};
  font-size: ${({ $fontSize }) => $fontSize};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  border: ${({ $border }) => $border};
  width: ${({ $width }) => $width};
  color: ${({ $color }) => $color};

  &:hover {
    background-color: rgb(240, 255, 152);
  }

  @media (max-width: 376px) {
  }
`
