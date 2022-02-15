import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import { RichText, RichTextBlock } from 'prismic-reactjs'
import { ImageProps } from '../../components/footer/footer'
import { Speech } from '../../components/speech'

interface Item {
  image: ImageProps
  quote: RichTextBlock[]
}
interface Props {
  slice: {
    items: Item[]
  }
}

const Quote: FunctionComponent<Props> = ({ slice }): JSX.Element => {
  return (
    <section>
      {slice.items.map((item: Item) => (
        <section
          className="grid relative md:grid-cols-2 md:even:reversed"
          key={item.image.alt}
        >
          <Image
            src={item.image.url}
            alt={item.image.alt}
            width={item.image.dimensions.width}
            height={item.image.dimensions.height}
          />
          <Speech />
          <section className="relative z-10 py-20 px-5 lg:px-20 xl:px-32 xl:pt-28">
            <RichText render={item.quote} />
          </section>
        </section>
      ))}
    </section>
  )
}

export default Quote
