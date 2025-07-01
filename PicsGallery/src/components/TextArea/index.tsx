import { ChangeEvent } from 'react'
import { StyledTextArea } from './styled'

type Props = {
  onChange: (e: string) => void
  placeholder?: string
  value?: string
  height?: string
  width?: string
}

export const TextArea = ({ onChange, placeholder, value, height, width }: Props) => {
  return (
    <StyledTextArea
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value)
      }}
      placeholder={placeholder}
      value={value}
      $height={height ?? 'auto'}
      $width={width ?? '100%'}
    ></StyledTextArea>
  )
}
