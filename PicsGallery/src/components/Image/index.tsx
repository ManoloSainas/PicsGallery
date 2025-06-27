import { StyledImage } from './styled'

type Props = {
  imageUrl: string
  alt?: string
  width?: number
  height?: number
}

export const Image = ({ imageUrl, alt = '', width, height }: Props) => {
  return <StyledImage src={imageUrl} alt={alt} $width={width} $height={height} />
}
