import { faHeart } from '@fortawesome/free-solid-svg-icons'

export const iconsSet = {
  Heart: faHeart
  // AGGIUNGERE LE ALTRE ICONE
}
export type IconName = keyof typeof iconsSet

// You can change the size of Font Awesome icons by using the size prop.
// The size prop accepts values like "xs", "lg", "sm", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"
