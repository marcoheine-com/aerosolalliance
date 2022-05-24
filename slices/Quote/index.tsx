import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import { ImageProps } from '../../entities'
import { Speech } from '../../components/icons'
import { RichTextField } from '@prismicio/types'
import { PrismicRichText } from '@prismicio/react'

interface Item {
  image: ImageProps
  quote: RichTextField
}
interface Props {
  slice: {
    items: Item[]
  }
}

const Quote: FunctionComponent<Props> = ({ slice }): JSX.Element => {
  return (
    <section>
      {slice.items?.map((item: Item, index: number) => (
        <section
          className="grid relative md:grid-cols-2 md:even:reversed"
          key={item.image.alt || index}
        >
          {item.image.url && (
            <Image
              src={item.image.url}
              alt={item.image.alt}
              width={item.image.dimensions.width}
              height={item.image.dimensions.height}
            />
          )}
          <section className="relative px-8 pt-8 pb-20 lg:px-20 xl:px-32 xl:pt-28">
            <div className="relative z-[2]">
              <PrismicRichText
                field={item.quote}
                components={{
                  paragraph: (props: any) => (
                    <p className="text-2xl leading-[1.35]">{props.children}</p>
                  ),
                  heading2: (props: any) => (
                    <h2 className="mb-0">{props.children}</h2>
                  ),
                }}
              />
            </div>
            <Speech />
          </section>
        </section>
      ))}
    </section>
  )
}

export default Quote
