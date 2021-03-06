import React, { FunctionComponent } from 'react'
import { FullWidthSVG } from '../../components/fullWidthSVG'
import { Color, DistanceToBottom, ImageProps, SVG } from '../../entities'
import { TwoColumnSection } from '../../components/twoColumnSection'
import { HorizontalMenu } from '../../components/horizontalMenu'
import { Item } from '../../entities/item'
import { FullWidthWithBgImage } from '../../components/fullWidthWithBgImage'
import { RichTextField } from '@prismicio/types'
import { getDistanceToBottom } from '../../utils/getDistanceToBottom'

interface Props {
  slice: {
    items: Item[]
    primary: {
      backgroundcolor: Color
      headersvg: SVG
      image: ImageProps
      textOnImage: RichTextField
      backgroundImage: ImageProps
      distanceToBottom: DistanceToBottom
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
          className={getDistanceToBottom(primary.distanceToBottom)}
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
            className={'xl:h-[90vh]'}
          />
          <HorizontalMenu
            items={slice.items}
            className={`xl:h-[10vh] ${getDistanceToBottom(
              primary.distanceToBottom
            )}`}
          />
        </>
      )
    case 'fullWidthWithMenu':
      return (
        <section
          className={`xl:h-screen ${getDistanceToBottom(
            primary.distanceToBottom
          )}`}
        >
          <FullWidthSVG
            backgroundcolor={primary.backgroundcolor}
            svg={primary.headersvg}
            className={'pt-56 xl:h-[90vh]'}
          />
          <HorizontalMenu
            items={slice.items}
            className="xl:h-[10vh]"
          />
        </section>
      )
    case 'fullWidthWithBgImage':
      return (
        <FullWidthWithBgImage
          svg={primary.headersvg}
          className={`h-[30vh] xl:h-screen ${getDistanceToBottom(
            primary.distanceToBottom
          )}`}
          bgImage={primary.backgroundImage}
        />
      )

    default:
      return (
        <FullWidthSVG
          backgroundcolor={primary.backgroundcolor}
          svg={primary.headersvg}
          className={`pt-56 ${getDistanceToBottom(primary.distanceToBottom)}`}
        />
      )
  }
}

export default Header
