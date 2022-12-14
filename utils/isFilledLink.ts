import {
  FilledLinkToDocumentField,
  FilledLinkToMediaField,
  FilledLinkToWebField,
} from '@prismicio/types'
export const filledLinkTypeGuard = (
  link: any
): link is
  | FilledLinkToDocumentField
  | FilledLinkToMediaField
  | FilledLinkToWebField => {
  return link?.url !== undefined
}
