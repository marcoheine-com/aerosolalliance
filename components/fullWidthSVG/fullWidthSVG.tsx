import Image from 'next/image'
import { FunctionComponent } from 'react'
import { Backgroundcolor, SVG } from '../../entities'
import { getBackgroundColorClass } from '../../utils/getBackgroundColorClass'

interface Props {
  backgroundcolor: Backgroundcolor
  className?: string
  svg: SVG
}

export const FullWidthSVG: FunctionComponent<Props> = ({
  backgroundcolor,
  className,
  svg,
}): JSX.Element => {
  const BACKGROUND_COLOR = getBackgroundColorClass(backgroundcolor)

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
