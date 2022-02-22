import { Backgroundcolor } from '../entities'

export const getBackgroundColorClass = (color: Backgroundcolor): string => {
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
    default:
      return 'bg-white'
  }
}
