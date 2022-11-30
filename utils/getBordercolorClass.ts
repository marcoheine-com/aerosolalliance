import { Color } from '../entities'

export const getBordercolorClass = (color: Color): string => {
  switch (color) {
    case 'yellow':
      return 'border-yellow'
    case 'red':
      return 'border-red'
    case 'purple':
      return 'border-purple'
    case 'lightblue':
      return 'border-lightblue'
    case 'darkblue':
      return 'border-darkblue'
    case 'green':
      return 'border-green'
    default:
      return 'border-white'
  }
}
