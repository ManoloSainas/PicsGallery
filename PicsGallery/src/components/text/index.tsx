import { PropsWithChildren } from 'react'
import { StyledText } from './styled'

type TextType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

type Props = PropsWithChildren<{
  as?: TextType // special prop, changes the type of HTML element
}>

export const Text = ({ as = 'h1', children }: Props) => {
  return <StyledText as={as}>{children}</StyledText>
}
