import { DistanceToBottom } from '../entities'

export const getDistance = (
  distance: DistanceToBottom,
  isDistanceToBottom: boolean
): string => {
  if (isDistanceToBottom) {
    switch (distance) {
      case 'none':
        return 'mb-0'
      case 'small':
        return 'mb-10 lg:mb-16'
      case 'large':
        return 'mb-20 lg:mb-44'
      default:
        return 'mb-0'
    }
  }

  switch (distance) {
    case 'none':
      return 'mt-0'
    case 'small':
      return 'mt-10 lg:mt-16'
    case 'large':
      return 'mt-32 lg:mt-44'
    default:
      return 'mt-0'
  }
}
