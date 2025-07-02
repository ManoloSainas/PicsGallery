import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { IconName, iconsSet } from './config'

type Props = {
  iconName: IconName
  color?: string
  size?: FontAwesomeIconProps['size']
}

export const Icon = ({ iconName, color, size = 'sm' }: Props) => {
  const icon = iconsSet[iconName]

  return <FontAwesomeIcon icon={icon} color={color} size={size} />
}
