import { FunctionComponent } from 'react'
import Image from 'next/image'
import { Color, ImageProps, SVG } from '../../entities'
import { getBackgroundcolorClass } from '../../utils'
import { RichTextField } from '@prismicio/types'
import { PrismicRichText } from '@prismicio/react'

interface Props {
  backgroundcolor: Color
  className?: string
  svg: SVG
  image: ImageProps
  headline: RichTextField
}

export const TwoColumnSection: FunctionComponent<Props> = ({
  backgroundcolor,
  className = '',
  svg,
  image,
  headline,
}) => {
  const BACKGROUND_COLOR = getBackgroundcolorClass(backgroundcolor)
  return (
    <section
      className={`${className} grid grid-rows-2 overflow-hidden lg:grid-cols-2 lg:grid-rows-1`}
    >
      <section
        className={`${BACKGROUND_COLOR} flex flex-col justify-center py-36 px-6 md:px-20 xl:p-32`}
      >
        {svg?.url && (
          <Image
            src={svg.url}
            width={svg.width}
            height={svg.height}
            alt={svg.name}
          />
        )}
      </section>
      <section className="relative">
        {image.url && (
          <Image
            src={image?.url}
            fill
            style={{ objectFit: 'cover' }}
            alt={image?.alt}
          />
        )}
        {headline ? (
          <span className="absolute top-2/4 left-2/4 -translate-x-1/2 font-UvasBlack-Black text-white">
            <PrismicRichText
              field={headline}
              components={{
                heading1: ({ children }) => (
                  <h1 className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 text-center font-UvasBlack-Black text-5xl text-white lg:text-[80px]">
                    {children}
                  </h1>
                ),
              }}
            />
          </span>
        ) : null}
      </section>
    </section>
  )
}
