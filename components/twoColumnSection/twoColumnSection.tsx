import { RichText, RichTextBlock } from 'prismic-reactjs'
import { FunctionComponent } from 'react'
import Image from 'next/image'
import { Color, ImageProps, SVG } from '../../entities'
import { getBackgroundcolorClass } from '../../utils'

interface Props {
  backgroundcolor: Color
  className?: string
  svg: SVG
  image: ImageProps
  headline: RichTextBlock[]
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
      className={`${className} grid grid-rows-2 overflow-hidden 2xl:grid-rows-1 2xl:grid-cols-2`}
    >
      <section
        className={`${BACKGROUND_COLOR} flex flex-col justify-center py-20 px-5 lg:px-20`}
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
        {headline && headline[0].text ? (
          <span className="absolute top-2/4 left-2/4 text-white -translate-x-1/2 fontUvasBlack">
            <RichText render={headline} />
          </span>
        ) : null}
      </section>
    </section>
  )
}
