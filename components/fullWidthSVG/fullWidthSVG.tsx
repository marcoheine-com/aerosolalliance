import Image from 'next/image'
import { FunctionComponent } from 'react'
import { Color, SVG } from '../../entities'
import { getTailwindClass } from '../../utils/getTailwindClass'

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
  const BACKGROUND_COLOR = getTailwindClass('bg', backgroundcolor)

  return (
    <section
      className={`${BACKGROUND_COLOR} p-20 lg:p-52 flex flex-col justify-center relative ${className}`}
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
