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
          className="px-6 mx-auto max-w-4xl sm:px-16 module-spacing-b textContent"
        >
          <PrismicRichText
            field={item.Content}
            components={{
              paragraph: (props: any) => (
                <p className="leading-[2.1] xl:leading-[2.75]">
                  {props.children}
                </p>
              ),
            }}
          />
        </section>
      ))}
    </>
  )
}

export default TextContent
