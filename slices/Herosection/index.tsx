import React, { FunctionComponent } from 'react'
import { Color, ImageProps, SVG } from '../../entities'
import { FullWidthSVG } from '../../components/fullWidthSVG'
import { TwoColumnSection } from '../../components/twoColumnSection'
import { RichTextField } from '@prismicio/types'

interface HeroSection {
  backgroundcolor: Color
  herosvg: SVG
  heroimage: ImageProps
  heroheadline: RichTextField
}

interface Slice {
  primary: HeroSection
  variation: 'default-slice' | 'twoColumnHero'
}

interface Props {
  slice: Slice
}

const Herosection: FunctionComponent<Props> = (props): JSX.Element => {
  const { primary, variation } = props.slice

  return variation === 'twoColumnHero' ? (
    <TwoColumnSection
      backgroundcolor={primary.backgroundcolor}
      svg={primary.herosvg}
      image={primary.heroimage}
      headline={primary.heroheadline}
    />
  ) : (
    <FullWidthSVG
      backgroundcolor={primary.backgroundcolor}
      svg={primary.herosvg}
    />
  )
}

export default Herosection
