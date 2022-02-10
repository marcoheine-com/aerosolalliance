import React from 'react'
import Image from 'next/image'

interface HeroSVG {
  url: string
  name: string
}

interface Primary {
  backgroundcolor: 'yellow' | 'red' | 'purple' | 'lightblue' | 'darkblue'
  herosvg: HeroSVG
}

interface Slice {
  primary: Primary
}

const Herosection = ({ slice }: { slice: Slice }) => {
  return (
    <section>
      <span className="title">
        {slice.primary.backgroundcolor && (
          <div>
            this block has the backgroundcolor of{' '}
            {slice.primary.backgroundcolor}
          </div>
        )}
      </span>
      {slice.primary.herosvg && (
        <Image
          src={slice.primary.herosvg.url}
          layout="fill"
          alt={slice.primary.herosvg.name}
        />
      )}
    </section>
  )
}

export default Herosection
