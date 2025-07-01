import styled from 'styled-components'

export const StyledTextArea = styled.textarea<{ $height: string; $width: string }>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`
