import { FilledImageFieldImage } from '@prismicio/types'

export const filledImageTypeGuard = (
  image: any
): image is FilledImageFieldImage => {
  return image?.url !== undefined
}
