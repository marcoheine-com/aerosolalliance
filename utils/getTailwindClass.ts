import { Color } from '../entities'

type Pre = 'bg' | 'text' | 'border'

export const getTailwindClass = (pre: Pre, color: Color): string => {
  switch (color) {
    case 'yellow':
      return `${pre}-yellow`
    case 'red':
      return `${pre}-red`
    case 'purple':
      return `${pre}-purple`
    case 'lightblue':
      return `${pre}-lightblue`
    case 'darkblue':
      return `${pre}-darkblue`
    case 'green':
      return `${pre}-green`
    default:
      return `${pre}-white`
  }
}
