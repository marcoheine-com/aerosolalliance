import Image from 'next/image'
import { FunctionComponent } from 'react'
import { Color, SVG } from '../../entities'
import { getBackgroundcolorClass } from '../../utils'

interface Props {
  backgroundcolor: Color
  className?: string
  svg: SVG
}

export const FullWidthSVG: FunctionComponent<Props> = ({
  backgroundcolor,
  className,
  svg,
}): JSX.Element => {
  const BACKGROUND_COLOR = getBackgroundcolorClass(backgroundcolor)

  return (
    <section
      className={`${BACKGROUND_COLOR} pt-56 px-20 pb-32 lg:p-52 flex flex-col justify-center relative ${className}`}
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
  )
}
