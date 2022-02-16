import React, { FunctionComponent } from 'react'
import { RichText } from 'prismic-reactjs'
import Image from 'next/image'
import { ImageProps } from '../../entities'
import Link from 'next/link'

interface Item {
  image: ImageProps
}

interface Props {
  slice: {
    items: Item[]
  }
}

const LinkImageGallery: FunctionComponent<Props> = ({ slice }) => {
  return (
    <section className="grid gap-y-5 p-5 md:grid-cols-2 md:gap-16 md:p-16 xl:gap-24 xl:p-24">
      {slice?.items?.map((item: any, i: number) => (
        <div key={item.image.alt || i} className="relative">
          <Link href={item.link}>
            <a>
              {item.image.url && (
                <Image
                  src={item.image.url}
                  alt={item.image.alt || i}
                  width={item.image.dimensions.width}
                  height={item.image.dimensions.height}
                />
              )}
              <span className="absolute top-2/4 left-2/4 text-white -translate-x-1/2 fontUvasBlack">
                <RichText render={item.linkLabel} />
              </span>
            </a>
          </Link>
        </div>
      ))}
    </section>
  )
}

export default LinkImageGallery
