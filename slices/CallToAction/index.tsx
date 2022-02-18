import Link from 'next/link'
import { RichText, RichTextBlock } from 'prismic-reactjs'
import React from 'react'

interface Item {
  invertedColor: boolean
  linkColor: string
  link: {
    uid: string
  }
  linkLabel: RichTextBlock[]
  rotation: 'left' | 'right'
}

interface Props {
  slice: {
    items: Item[]
  }
}

const getInvertedStyles = (color: string): string =>
  ` bg-${color} b-2 text-${color}`

const getNormalStyles = (color: string): string => ` bg-${color} text-white`

const getLinkStyling = (
  invertedColor: boolean,
  linkColor: string,
  rotation: string
): string => {
  let STYLES = ''
  if (rotation === 'left') {
    STYLES = '-rotate-[40deg]'
  } else if (rotation === 'right') {
    STYLES = '-rotate-[-40deg]'
  }

  if (invertedColor) {
    STYLES += getInvertedStyles(linkColor)
  } else {
    STYLES += getNormalStyles(linkColor)
  }

  return STYLES
}

const CallToAction: React.FunctionComponent<Props> = ({
  slice,
}): JSX.Element => {
  return (
    <section className="flex gap-8 px-5">
      {slice?.items?.map((item: Item) => (
        <Link href={`/${item.link?.uid}`} key={item.link.uid}>
          <a
            className={`${getLinkStyling(
              item.invertedColor,
              item.linkColor,
              item.rotation
            )} inline-block`}
          >
            <RichText render={item.linkLabel} />
          </a>
        </Link>
      ))}
    </section>
  )
}

export default CallToAction
