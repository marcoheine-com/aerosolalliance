import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import { RichText, RichTextBlock } from 'prismic-reactjs'

interface HeroSVG {
  url: string
  name: string
}

interface HeroImage {
  url: string
  alt: string
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

const renderSingleColumnHero = (primary: HeroSection): JSX.Element => {
  return (
    primary.backgroundcolor && (
      <section
        className={`${getBackgroundColorClass(
          primary.backgroundcolor
        )} px-5 relative`}
      >
        {primary.herosvg?.url && (
          <div className="max-w-5xl mx-auto">
            <Image
              src={primary.herosvg.url}
              width="100%"
              height="100%"
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
        {renderSingleColumnHero(primary)}
        <section>
          <Image
            src={primary.heroimage?.url}
            width="100%"
            height="100%"
            layout="responsive"
            alt={primary.heroimage?.alt}
          />
          <RichText render={primary.heroheadline} />
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
