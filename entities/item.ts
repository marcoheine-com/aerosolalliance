import { RichTextField } from '@prismicio/types'

export interface Item {
  link: {
    url: string
    uid: string
    type: string
  }
  linkLabel: RichTextField
}
