import { PropsWithChildren } from 'react'
import { StyledText } from './styled'

type Props = PropsWithChildren

export const Text = ({ children }: Props) => {
  return <StyledText>{children}</StyledText>
}
