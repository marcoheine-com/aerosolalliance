import { RichTextBlock } from 'prismic-reactjs'

export interface Item {
  link: {
    url: string
    uid: string
    type: string
  }
  linkLabel: RichTextBlock[]
}
