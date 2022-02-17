import React, { FunctionComponent } from 'react'
import { FullWidthSVG } from '../../components/fullWidthSVG'
import { getBackgroundColorClass } from '../../utils/getBackgroundColorClass'
import { Backgroundcolor, ImageProps, SVG } from '../../entities'
import { TwoColumnSection } from '../../components/twoColumnSection'
import { RichTextBlock } from 'prismic-reactjs'
import { HorizontalMenu } from '../../components/horizontalMenu'
import { Item } from '../../entities/item'

interface Props {
  slice: {
    items: Item[]
    primary: {
      backgroundcolor: Backgroundcolor
      headersvg: SVG
      image: ImageProps
      textOnImage: RichTextBlock[]
    }
    variation:
      | 'default-slice'
      | 'twoColumn'
      | 'twoColumnWithMenu'
      | 'fullWidthWithMenu'
  }
}

const Header: FunctionComponent<Props> = ({ slice }) => {
  const { variation, primary } = slice
  const BACKGROUND_COLOR = getBackgroundColorClass(primary.backgroundcolor)

  switch (variation) {
    case 'twoColumn':
      return (
        <TwoColumnSection
          backgroundcolor={BACKGROUND_COLOR}
          svg={primary.headersvg}
          image={primary.image}
          headline={primary.textOnImage}
        />
      )
    case 'twoColumnWithMenu':
      return (
        <>
          <TwoColumnSection
            backgroundcolor={BACKGROUND_COLOR}
            svg={primary.headersvg}
            image={primary.image}
            headline={primary.textOnImage}
            className="h-[90vh]"
          />
          <HorizontalMenu items={slice.items} className="h-[10vh]" />
        </>
      )
    case 'fullWidthWithMenu':
      return (
        <section className="h-screen">
          <FullWidthSVG
            backgroundcolor={BACKGROUND_COLOR}
            svg={primary.headersvg}
            className="h-[90vh]"
          />
          <HorizontalMenu items={slice.items} className="h-[10vh]" />
        </section>
      )
    default:
      return (
        <FullWidthSVG
          backgroundcolor={BACKGROUND_COLOR}
          className="h-screen"
          svg={primary.headersvg}
        />
      )
  }
}

export default Header
