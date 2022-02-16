import React, { FunctionComponent } from 'react'
import { RichTextBlock } from 'prismic-reactjs'
import { Backgroundcolor, ImageProps, SVG } from '../../entities'
import { FullWidthSVG } from '../../components/fullWidthSVG'
import { TwoColumnSection } from '../../components/twoColumnSection'
import { getBackgroundColorClass } from '../../utils/getBackgroundColorClass'

interface HeroSection {
  backgroundcolor: Backgroundcolor
  herosvg: SVG
  heroimage: ImageProps
  heroheadline: RichTextBlock[]
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
  const BACKGROUND_COLOR = getBackgroundColorClass(primary.backgroundcolor)

  return variation === 'twoColumnHero' ? (
    <TwoColumnSection
      backgroundcolor={BACKGROUND_COLOR}
      svg={primary.herosvg}
      image={primary.heroimage}
      headline={primary.heroheadline}
    />
  ) : (
    <FullWidthSVG backgroundcolor={BACKGROUND_COLOR} svg={primary.herosvg} />
  )
}

export default Herosection
