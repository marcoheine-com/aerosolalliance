import { Color } from '../entities'

export const getBackgroundcolorClass = (color: Color): string => {
  switch (color) {
    case 'yellow':
      return 'bg-yellow'
    case 'red':
      return 'bg-red'
    case 'purple':
      return 'bg-purple'
    case 'lightblue':
      return 'bg-lightblue'
    case 'darkblue':
      return 'bg-darkblue'
    case 'green':
      return 'bg-green'
    case 'lightgrey':
      return 'bg-lightgrey'
    default:
      return 'bg-white'
  }
}
