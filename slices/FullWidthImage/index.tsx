import React, { FunctionComponent } from 'react'
import { ImageProps } from '../../entities'
import Image from "next/legacy/image"

type Variation = 'default-slice' | 'twoColumn'

interface Item {
  leftImage: ImageProps
  rightImage: ImageProps
}

interface Props {
  slice: {
    primary: {
      image: ImageProps
      leftImage: ImageProps
      rightImage: ImageProps
    }
    items: Item[]
    variation: Variation
  }
}

const FullWidthImage: FunctionComponent<Props> = ({ slice }) => {
  const { primary, variation } = slice

  switch (variation) {
    case 'twoColumn':
      return (
        <>
          <section
            className="grid lg:grid-cols-2"
            key={primary.leftImage.alt}
          >
            <Image
              src={primary.leftImage.url}
              width={primary.leftImage.dimensions.width}
              height={primary.leftImage.dimensions.height}
              alt={primary.leftImage.alt}
            />
            <Image
              src={primary.rightImage.url}
              width={primary.rightImage.dimensions.width}
              height={primary.rightImage.dimensions.height}
              alt={primary.rightImage.alt}
            />
          </section>
        </>
      )
    case 'default-slice':
      return primary.image.url ? (
        <Image
          src={primary.image?.url}
          alt={primary.image?.alt}
          width={primary.image?.dimensions.width}
          height={primary.image?.dimensions.height}
          layout="responsive"
        />
      ) : null
    default:
      return null
  }
}

export default FullWidthImage
