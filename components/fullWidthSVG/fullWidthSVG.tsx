import Image from 'next/image'
import { FunctionComponent } from 'react'
import { SVG } from '../../entities'

interface Props {
  backgroundcolor: string
  className?: string
  svg: SVG
}

export const FullWidthSVG: FunctionComponent<Props> = ({
  backgroundcolor,
  className,
  svg,
}): JSX.Element => {
  console.log(backgroundcolor)
  return (
    <section
      className={`${backgroundcolor} p-20 lg:p-52 flex flex-col justify-center relative ${className}`}
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
