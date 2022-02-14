import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import { RichText, RichTextBlock } from 'prismic-reactjs'

interface HeroSVG {
  url: string
  name: string
  width: number
  height: number
}

interface HeroImage {
  url: string
  alt: string
  dimensions: {
    width: number
    height: number
  }
}

interface HeroSection {
  backgroundcolor:
    | 'yellow'
    | 'red'
    | 'purple'
    | 'lightblue'
    | 'darkblue'
    | 'white'
  herosvg: HeroSVG
  heroimage: HeroImage
  heroheadline: RichTextBlock[]
}

interface Slice {
  primary: HeroSection
  variation: 'default-slice' | 'twoColumnHero'
}

interface Props {
  slice: Slice
}

const getBackgroundColorClass = (
  color: HeroSection['backgroundcolor']
): string => {
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

const renderSingleColumnHero = (
  primary: HeroSection,
  isFullWidth = true
): JSX.Element => {
  const FULL_WIDTH_STYLES = isFullWidth ? 'p-20 lg:p-52' : 'px-5 py-20 lg:px-20'
  return (
    primary.backgroundcolor && (
      <section
        className={`${getBackgroundColorClass(
          primary.backgroundcolor
        )} ${FULL_WIDTH_STYLES}`}
      >
        {primary.herosvg?.url && (
          <div className="max-w-5xl mx-auto">
            <Image
              src={primary.herosvg.url}
              width={primary.herosvg.width}
              height={primary.herosvg.height}
              layout="responsive"
              alt={primary.herosvg.name}
            />
          </div>
        )}
      </section>
    )
  )
}

const renderTwoColumnHero = (primary: HeroSection): JSX.Element => {
  return (
    <section className="grid grid-cols-2">
      <>
        {renderSingleColumnHero(primary, false)}
        <section>
          <Image
            src={primary.heroimage?.url}
            layout="responsive"
            height={primary.heroimage?.dimensions.height}
            width={primary.heroimage?.dimensions.width}
            alt={primary.heroimage?.alt}
          />
          {primary.heroheadline && primary.heroheadline[0].spans?.length ? (
            <RichText render={primary.heroheadline} />
          ) : null}
        </section>
      </>
    </section>
  )
}
const Herosection: FunctionComponent<Props> = ({ slice }): JSX.Element => {
  const { primary, variation } = slice

  return variation === 'twoColumnHero'
    ? renderTwoColumnHero(primary)
    : renderSingleColumnHero(primary)
}

export default Herosection
