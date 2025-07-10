import { ChangeEvent } from 'react'
import { StyledInput } from './styled'

type Props = {
  placeholder?: string
  value?: string
  type: string
  size?: number
  onChange: (e: string) => void
}

export const Input = ({ placeholder, value, type, size, onChange }: Props) => {
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      type={type}
      size={size}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
      }}
    />
  )
}
