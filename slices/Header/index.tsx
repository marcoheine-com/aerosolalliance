import React, { FunctionComponent } from 'react'
import { FullWidthSVG } from '../../components/fullWidthSVG'
import { Color, ImageProps, SVG } from '../../entities'
import { TwoColumnSection } from '../../components/twoColumnSection'
import { RichTextBlock } from 'prismic-reactjs'
import { HorizontalMenu } from '../../components/horizontalMenu'
import { Item } from '../../entities/item'
import { FullWidthWithBgImage } from '../../components/fullWidthWithBgImage'

interface Props {
  slice: {
    items: Item[]
    primary: {
      backgroundcolor: Color
      headersvg: SVG
      image: ImageProps
      textOnImage: RichTextBlock[]
      backgroundImage: ImageProps
    }
    variation:
      | 'default-slice'
      | 'twoColumn'
      | 'twoColumnWithMenu'
      | 'fullWidthWithMenu'
      | 'fullWidthWithBgImage'
  }
}

const Header: FunctionComponent<Props> = ({ slice }) => {
  const { variation, primary } = slice

  switch (variation) {
    case 'twoColumn':
      return (
        <TwoColumnSection
          backgroundcolor={primary.backgroundcolor}
          svg={primary.headersvg}
          image={primary.image}
          headline={primary.textOnImage}
        />
      )
    case 'twoColumnWithMenu':
      return (
        <>
          <TwoColumnSection
            backgroundcolor={primary.backgroundcolor}
            svg={primary.headersvg}
            image={primary.image}
            headline={primary.textOnImage}
            className={'h-[90vh]'}
          />
          <HorizontalMenu items={slice.items} className="h-[10vh]" />
        </>
      )
    case 'fullWidthWithMenu':
      return (
        <section className="h-screen">
          <FullWidthSVG
            backgroundcolor={primary.backgroundcolor}
            svg={primary.headersvg}
            className={'h-[90vh]'}
          />
          <HorizontalMenu items={slice.items} className="h-[10vh]" />
        </section>
      )
    case 'fullWidthWithBgImage':
      return (
        <FullWidthWithBgImage
          svg={primary.headersvg}
          className="h-screen"
          bgImage={primary.backgroundImage}
        />
      )

    default:
      return (
        <FullWidthSVG
          backgroundcolor={primary.backgroundcolor}
          className="h-screen"
          svg={primary.headersvg}
        />
      )
  }
}

export default Header
