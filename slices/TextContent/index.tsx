import React, { FunctionComponent } from 'react'
import { RichText, RichTextBlock } from 'prismic-reactjs'

interface Item {
  Content: RichTextBlock[]
}

interface Props {
  slice: any
  items: Item[]
}

const TextContent: FunctionComponent<Props> = ({ slice }): JSX.Element => {
  return slice?.items?.map((item: Item, i: number) => (
    <section key={i} className="max-w-4xl px-5 mx-auto my-44 textContent">
      <RichText render={item.Content} />
    </section>
  ))
}

export default TextContent
