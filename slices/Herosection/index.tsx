import React, { FunctionComponent } from 'react'
import { Color, DistanceToBottom, ImageProps, SVG } from '../../entities'
import { FullWidthSVG } from '../../components/fullWidthSVG'
import { TwoColumnSection } from '../../components/twoColumnSection'
import { RichTextField } from '@prismicio/types'
import { getDistanceToBottom } from '../../utils/getDistanceToBottom'

interface HeroSection {
  backgroundcolor: Color
  herosvg: SVG
  herosvgMobile?: SVG
  caption?: string
  heroimage: ImageProps
  heroheadline: RichTextField
  distanceToBottom: DistanceToBottom
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
      className={`${getDistanceToBottom(primary.distanceToBottom)}`}
    />
  ) : (
    <FullWidthSVG
      backgroundcolor={primary.backgroundcolor}
      svg={primary.herosvg}
      svgMobile={primary.herosvgMobile}
      caption={primary.caption}
      className={`${getDistanceToBottom(primary.distanceToBottom)}`}
    />
  )
}

export default Herosection
