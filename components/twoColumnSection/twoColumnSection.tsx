import { RichText, RichTextBlock } from 'prismic-reactjs'
import { FunctionComponent } from 'react'
import Image from 'next/image'
import { ImageProps, SVG } from '../../entities'

interface Props {
  backgroundcolor: string
  svg: SVG
  image: ImageProps
  headline: RichTextBlock[]
}

export const TwoColumnSection: FunctionComponent<Props> = ({
  backgroundcolor,
  svg,
  image,
  headline,
}) => {
  return (
    <section className="grid grid-cols-2">
      <section className={`${backgroundcolor} py-20 px-5 lg:px-20`}>
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
      <section>
        {image.url && (
          <Image
            src={image?.url}
            layout="responsive"
            height={image?.dimensions.height}
            width={image?.dimensions.width}
            alt={image?.alt}
          />
        )}
        {headline && headline[0].spans?.length ? (
          <RichText render={headline} />
        ) : null}
      </section>
    </section>
  )
}
