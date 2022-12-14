import Image from 'next/image'
import { FunctionComponent } from 'react'
import { Color, SVG } from '../../entities'
import { getBackgroundcolorClass } from '../../utils'

interface Props {
  backgroundcolor: Color
  className?: string
  caption?: string
  svg: SVG
  svgMobile?: SVG
}

export const FullWidthSVG: FunctionComponent<Props> = ({
  backgroundcolor,
  className = '',
  caption,
  svg,
  svgMobile,
}): JSX.Element => {
  const BACKGROUND_COLOR = getBackgroundcolorClass(backgroundcolor)

  return (
    <section
      className={`${BACKGROUND_COLOR} relative flex flex-col justify-center p-12 ${className}`}
    >
      {svgMobile?.url && (
        <div className="mb-12 lg:hidden">
          <Image
            src={svgMobile.url}
            width={svgMobile.width}
            height={svgMobile.height}
            layout="responsive"
            alt={svg.name}
          />
        </div>
      )}

      {svg?.url && (
        <div
          className={`${
            svgMobile?.url ? 'hidden' : ''
          } mx-auto mb-12 w-full lg:block`}
        >
          <Image
            src={svg.url}
            width={svg.width}
            height={svg.height}
            layout="responsive"
            alt={svg.name}
          />
        </div>
      )}
      {caption && <p className="pb-0 text-center">{caption}</p>}
    </section>
  )
}
