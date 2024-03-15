import { FunctionComponent } from 'react'
import Image from "next/legacy/image"
import { Color, ImageProps, SVG } from '../../entities'
import { getBackgroundcolorClass } from '../../utils'
import { RichTextField } from '@prismicio/types'
import { PrismicRichText } from '@prismicio/react'
import { modifyImageUrl } from '../../utils/modifyImageUrl'

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

  const svgURL = modifyImageUrl(svg.url)

  return (
    <section
      className={`${className} grid grid-rows-2 overflow-hidden lg:grid-cols-2 lg:grid-rows-1`}
    >
      <section
        className={`${BACKGROUND_COLOR} flex flex-col justify-center px-6 py-36 md:px-20 xl:p-32`}
      >
        {svgURL && (
          <Image
            src={svgURL}
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
          <span className="absolute left-2/4 top-2/4 -translate-x-1/2 font-UvasBlack-Black text-white">
            <PrismicRichText
              field={headline}
              components={{
                heading1: ({ children }) => (
                  <h1 className="absolute left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 text-center font-UvasBlack-Black text-5xl text-white lg:text-[80px]">
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
