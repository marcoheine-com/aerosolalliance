import React, { FunctionComponent } from 'react'
import { RichText, RichTextBlock } from 'prismic-reactjs'
import Image from 'next/image'
import { ImageProps } from '../../entities'
import Link from 'next/link'

interface Item {
  image: ImageProps
  link: {
    url: string
    uid: string
  }
  linkLabel: RichTextBlock[]
}

interface Props {
  slice: {
    items: Item[]
  }
}

const LinkImageGallery: FunctionComponent<Props> = ({ slice }) => {
  return (
    <section className="grid gap-y-5 p-5 md:grid-cols-2 md:gap-16 md:p-16 xl:gap-24 xl:p-24">
      {slice?.items?.map((item: Item) =>
        item.link.url ? (
          <div key={item.image.alt} className="relative">
            <Link href={item.link.url}>
              <a>
                {item.image.url && (
                  <Image
                    src={item.image.url}
                    alt={item.image.alt}
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
        ) : null
      )}
    </section>
  )
}

export default LinkImageGallery
