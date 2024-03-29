import { PrismicRichText } from '@prismicio/react'
import { RichTextField } from '@prismicio/types'
import Image from "next/legacy/image"
import React, { FunctionComponent } from 'react'
import { ImageProps } from '../../entities'

interface Item {
  image: ImageProps
  subtext: RichTextField
}

interface Props {
  slice: {
    items: Item[]
  }
}

const ImageGallery: FunctionComponent<Props> = ({ slice }) => {
  return (
    <section className="grid gap-14 p-5 md:grid-cols-2 lg:grid-cols-3 lg:p-10 xl:p-28">
      {slice?.items?.map((item, i) => (
        <div
          key={item.image.alt || i}
          className="imageWrapper relative text-center text-[0]"
        >
          {item.image.url && (
            <Image
              src={item.image.url}
              alt={item.image.alt}
              width={item.image.dimensions.width}
              height={item.image.dimensions.height}
            />
          )}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-darkblue/50 text-white opacity-0 transition-opacity hover:opacity-100">
            <PrismicRichText field={item.subtext} />
          </div>
        </div>
      ))}
    </section>
  )
}

export default ImageGallery
