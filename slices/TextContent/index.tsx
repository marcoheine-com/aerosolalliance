import React, { FunctionComponent } from 'react'
import { RichText, RichTextBlock } from 'prismic-reactjs'

interface Item {
  Content: RichTextBlock[]
}

interface Props {
  slice: {
    items: Item[]
  }
}

const TextContent: FunctionComponent<Props> = ({ slice }): JSX.Element => {
  return (
    <>
      {slice?.items?.map((item: Item, i: number) => (
        <section key={i} className="px-5 my-44 mx-auto max-w-4xl textContent">
          <RichText render={item.Content} />
        </section>
      ))}
    </>
  )
}

export default TextContent
