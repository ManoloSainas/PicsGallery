import { ChangeEvent } from 'react'
import { StyledInput } from './styled'

type Props = {
  placeholder?: string
  value?: string
  type: string
  onChange: (e: string) => void
}

export const Input = ({ placeholder, value, type, onChange }: Props) => {
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
      }}
    />
  )
}
