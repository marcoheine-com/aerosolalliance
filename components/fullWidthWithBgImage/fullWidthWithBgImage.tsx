import Image from 'next/image'
import { FunctionComponent } from 'react'
import { ImageProps, SVG } from '../../entities'

interface Props {
  svg: SVG
  bgImage: ImageProps
}

export const FullWidthWithBgImage: FunctionComponent<Props> = ({
  svg,
  bgImage,
}) => {
  return (
    <section className="relative">
      {bgImage?.url && (
        <Image
          src={bgImage.url}
          width={bgImage.dimensions.width}
          height={bgImage.dimensions.height}
          layout="responsive"
          alt={bgImage.alt}
        />
      )}
      {svg?.url && (
        <div className="absolute top-1/3 left-0 p-7 w-full">
          <Image
            src={svg.url}
            width={svg.width}
            height={svg.height}
            layout="responsive"
            alt={svg.name}
          />
        </div>
      )}
    </section>
  )
}
