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
  className,
  svg,
  image,
  headline,
}) => {
  const BACKGROUND_COLOR = getBackgroundcolorClass(backgroundcolor)
  return (
    <section
      className={`${className} grid grid-rows-2 overflow-hidden lg:grid-rows-1 lg:grid-cols-2`}
    >
      <section
        className={`${BACKGROUND_COLOR} flex flex-col justify-center pt-56 px-20 pb-32 xl:p-20`}
      >
        {svg?.url && (
          <Image
            src={svg.url}
            width={svg.width}
            height={svg.height}
            layout="responsive"
            alt={svg.name}
          />
        )}
      </section>
      <section className="relative">
        {image.url && (
          <Image
            src={image?.url}
            layout="fill"
            objectFit="cover"
            alt={image?.alt}
          />
        )}
        {headline ? (
          <span className="absolute top-2/4 left-2/4 font-UvasBlack-Black text-white -translate-x-1/2">
            <PrismicRichText
              field={headline}
              components={{
                heading1: ({ children }) => (
                  <h1 className="absolute top-2/4 left-2/4 font-UvasBlack-Black text-5xl text-center text-white -translate-x-1/2 -translate-y-1/2 lg:text-[80px]">
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
