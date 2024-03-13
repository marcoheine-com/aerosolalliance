import React, { FunctionComponent } from 'react'
import Image from "next/legacy/image"
import Link from 'next/link'
import { SliceComponentProps } from '@prismicio/react'
import {
  LinkImageGallerySlice,
  LinkImageGallerySliceDefaultSliceItem,
} from '../../types.generated'
import { filledLinkTypeGuard } from '../../utils/isFilledLink'
import { linkResolver } from '../../prismicio'

const LinkImageGallery: FunctionComponent<
  SliceComponentProps<any>
> = ({ slice }) => {
  return (
    <section className="grid gap-5 p-5 md:grid-cols-2 md:p-16 xl:gap-16 xl:p-24 2xl:gap-20">
      {slice?.items?.map(
        (item: LinkImageGallerySliceDefaultSliceItem, index: number) => {
          const filledLink =
            item.link && filledLinkTypeGuard(item.link) ? item.link : null

          return filledLink ? (
            <Link
              href={linkResolver(filledLink)}
              key={`${filledLink.url}-${index}`}
            >
              <a className="relative">
                {item.image.url && (
                  <div className="text-[0]">
                    <Image
                      src={item.image.url}
                      alt={item.image.alt || ''}
                      width={item.image.dimensions.width}
                      height={item.image.dimensions.height}
                    />
                  </div>
                )}
                {item.svgcaption?.url && (
                  <div className="absolute left-2/4 top-2/4 w-full -translate-x-1/2 -translate-y-1/2">
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
          ) : null
        }
      )}
    </section>
  )
}

export default LinkImageGallery
