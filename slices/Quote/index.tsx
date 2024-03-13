import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import { QuoteSlice, QuoteSliceDefaultSliceItem } from '../../types.generated'
import { filledImageTypeGuard } from '../../utils/filledImageTypeGuard'

const Quote: FunctionComponent<SliceComponentProps<any>> = ({
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
              <div className="relative text-[0]">
                <Image
                  src={filledImage.url}
                  alt={filledImage.alt || ''}
                  width={filledImage.dimensions.width}
                  height={filledImage.dimensions.height}
                />
              </div>
            )}
            <figcaption
              className={`bottom-0 left-0 flex w-full translate-y-[-50px] p-4 text-white md:absolute md:translate-y-0 ${
                index % 2 ? 'md:justify-end' : 'md:justify-start'
              }`}
            >
              <span>{item.caption}</span>
            </figcaption>
            <section className="relative px-8 pb-20 pt-8 lg:px-20 xl:px-32 xl:pt-28">
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
