import React, { FunctionComponent } from 'react'
import { RichTextField } from '@prismicio/types'
import { PrismicRichText } from '@prismicio/react'

interface Item {
  Content: RichTextField
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
        <section
          key={i}
          className="px-5 my-20 mx-auto max-w-4xl sm:px-16 lg:my-44 textContent"
        >
          <PrismicRichText field={item.Content} />
        </section>
      ))}
    </>
  )
}

export default TextContent
