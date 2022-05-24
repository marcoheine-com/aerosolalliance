import { DistanceToBottom } from '../entities'

export const getDistanceToBottom = (
  distanceToBottom: DistanceToBottom
): string => {
  switch (distanceToBottom) {
    case 'none':
      return 'mb-0'
    case 'small':
      return 'mb-10 lg:mb-24'
    case 'large':
      return 'mb-20 lg:mb-44'
    default:
      return 'mb-0'
  }
}
