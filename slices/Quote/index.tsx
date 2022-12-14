import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import { QuoteSlice, QuoteSliceDefaultSliceItem } from '../../types.generated'
import { filledImageTypeGuard } from '../../utils/filledImageTypeGuard'

const Quote: FunctionComponent<SliceComponentProps<QuoteSlice>> = ({
  slice,
}): JSX.Element => {
  return (
    <section>
      {slice.items?.map((item: QuoteSliceDefaultSliceItem, index: number) => {
        const filledImage =
          item.image && filledImageTypeGuard(item.image) ? item.image : null

        return (
          <section
            className="md:even:reversed relative grid md:grid-cols-2"
            key={item.image.alt || index}
          >
            {filledImage && (
              <div className="relative">
                <Image
                  src={filledImage.url}
                  alt={filledImage.alt || ''}
                  width={filledImage.dimensions.width}
                  height={filledImage.dimensions.height}
                />
                <figcaption className="absolute bottom-0 left-0 w-full p-4 text-white">
                  {item.caption}
                </figcaption>
              </div>
            )}
            <section className="relative px-8 pt-8 pb-20 lg:px-20 xl:px-32 xl:pt-28">
              <div className="relative z-[2]">
                <PrismicRichText
                  field={item.quote}
                  components={{
                    heading2: (props: any) => (
                      <h2 className="mb-0">{props.children}</h2>
                    ),
                  }}
                />
              </div>
            </section>
          </section>
        )
      })}
    </section>
  )
}

export default Quote
