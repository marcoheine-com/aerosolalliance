import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import {
  LinkImageGallerySlice,
  LinkImageGallerySliceDefaultSliceItem,
} from '../../types.generated'
import { filledLinkTypeGuard } from '../../utils/isFilledLink'
import { linkResolver } from '../../prismicio'

const LinkImageGallery: FunctionComponent<
  SliceComponentProps<LinkImageGallerySlice>
> = ({ slice }) => {
  return (
    <section className="grid gap-5 p-5 md:grid-cols-2 md:p-16 xl:gap-16 xl:p-24 2xl:gap-20">
      {slice?.items?.map((item: LinkImageGallerySliceDefaultSliceItem) => {
        const filledLink =
          item.link && filledLinkTypeGuard(item.link) ? item.link : null
        return filledLink ? (
          <div
            key={item.image.alt}
            className="relative"
          >
            <Link href={linkResolver(filledLink)}>
              <a>
                {item.image.url && (
                  <Image
                    src={item.image.url}
                    alt={item.image.alt || ''}
                    width={item.image.dimensions.width}
                    height={item.image.dimensions.height}
                  />
                )}
                {item.svgcaption?.url && (
                  <div className="absolute top-2/4 left-2/4 w-full -translate-x-1/2 -translate-y-1/2 text-center font-UvasBlack-Black text-white">
                    <Image
                      src={item.svgcaption.url}
                      alt={item.svgcaption.alt || ''}
                      width={item.svgcaption.dimensions.width}
                      height={item.svgcaption.dimensions.height}
                    />
                  </div>
                )}
              </a>
            </Link>
          </div>
        ) : null
      })}
    </section>
  )
}

export default LinkImageGallery
