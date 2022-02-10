import React from 'react'
import Image from 'next/image'

interface HeroSVG {
  url: string
  name: string
}

interface Primary {
  backgroundcolor:
    | 'yellow'
    | 'red'
    | 'purple'
    | 'lightblue'
    | 'darkblue'
    | 'white'
  herosvg: HeroSVG
}

interface Slice {
  primary: Primary
}

const getBackgroundColorClass = (color: Primary['backgroundcolor']) => {
  switch (color) {
    case 'yellow':
      return 'bg-yellow'
    case 'red':
      return 'bg-red'
    case 'purple':
      return 'bg-purple'
    case 'lightblue':
      return 'bg-lightblue'
    case 'darkblue':
      return 'bg-darkblue'
    case 'white':
      return 'bg-white'
  }
}

const Herosection = ({ slice }: { slice: Slice }) => {
  return (
    slice.primary.backgroundcolor && (
      <section
        className={`${getBackgroundColorClass(
          slice.primary.backgroundcolor
        )} relative`}
      >
        {slice.primary.herosvg && (
          <Image
            src={slice.primary.herosvg.url}
            width="100%"
            height="100%"
            layout="responsive"
            alt={slice.primary.herosvg.name}
          />
        )}
      </section>
    )
  )
}

export default Herosection
