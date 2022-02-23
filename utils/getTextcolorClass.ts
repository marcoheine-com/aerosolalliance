import { Color } from '../entities'

export const getTextcolorClass = (color: Color): string => {
  switch (color) {
    case 'yellow':
      return 'text-yellow'
    case 'red':
      return 'text-red'
    case 'purple':
      return 'text-purple'
    case 'lightblue':
      return 'text-lightblue'
    case 'darkblue':
      return 'text-darkblue'
    case 'green':
      return 'text-green'
    default:
      return 'text-white'
  }
}
