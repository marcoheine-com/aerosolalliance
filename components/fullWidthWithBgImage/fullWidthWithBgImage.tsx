import Image from 'next/image'
import { FunctionComponent } from 'react'
import { ImageProps, SVG } from '../../entities'

interface Props {
  svg: SVG
  bgImage: ImageProps
  className?: string
}

export const FullWidthWithBgImage: FunctionComponent<Props> = ({
  svg,
  bgImage,
  className,
}) => {
  return (
    <section className={`relative ${className}`}>
      {bgImage?.url && (
        <Image
          src={bgImage.url}
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          style={{ objectFit: 'cover' }}
          alt={bgImage.alt}
        />
      )}
      {svg?.url && (
        <div className="absolute top-1/3 left-0 w-full p-7">
          <Image
            src={svg.url}
            width={svg.width}
            height={svg.height}
            alt={svg.name}
          />
        </div>
      )}
    </section>
  )
}
