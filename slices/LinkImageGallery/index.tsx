import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import { ImageProps } from '../../entities'
import Link from 'next/link'
import { RichTextField } from '@prismicio/types'
import { PrismicRichText } from '@prismicio/react'

interface Item {
  image: ImageProps
  link: {
    url: string
    uid: string
  }
  linkLabel: RichTextField
}

interface Props {
  slice: {
    items: Item[]
  }
}

const LinkImageGallery: FunctionComponent<Props> = ({ slice }) => {
  return (
    <section className="grid gap-5 p-5 md:grid-cols-2 md:p-16 xl:gap-16 xl:p-24 2xl:gap-20">
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

                <PrismicRichText
                  field={item.linkLabel}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="absolute top-2/4 left-2/4 font-UvasBlack-Black text-5xl text-center text-white -translate-x-1/2 -translate-y-1/2 xl:text-[64px] 2xl:text-[70px]">
                        {children}
                      </p>
                    ),
                  }}
                />
              </a>
            </Link>
          </div>
        ) : null
      )}
    </section>
  )
}

export default LinkImageGallery
