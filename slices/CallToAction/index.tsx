import Link from 'next/link'
import { RichText, RichTextBlock } from 'prismic-reactjs'
import React from 'react'
import { Color } from '../../entities'
import { getTailwindClass } from '../../utils/getTailwindClass'

interface Item {
  invertedColor: boolean
  linkColor: Color
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

const getLinkStyling = (item: Item): string => {
  if (item.invertedColor) {
    return `border-2 ${getTailwindClass(
      'border',
      item.linkColor
    )} ${getTailwindClass('text', item.linkColor)}`
  } else {
    return `${getTailwindClass(
      'bg',
      item.linkColor
    )} border-2 ${getTailwindClass('border', item.linkColor)}  text-white`
  }
}

const CallToAction: React.FunctionComponent<Props> = ({
  slice,
}): JSX.Element => {
  return (
    <section className="flex gap-8 px-5 mx-auto mb-40 max-w-4xl">
      {slice?.items?.map((item: Item) => (
        <Link href={`/${item.link?.uid}`} key={item.link.uid}>
          <a
            className={`${getLinkStyling(item)} ${
              item.rotation === 'left' ? 'rotate-[-40deg]' : 'rotate-[40deg]'
            } fontSwissIntlMono uppercase rounded-3xl py-2 px-5 inline-block`}
          >
            <RichText render={item.linkLabel} />
          </a>
        </Link>
      ))}
    </section>
  )
}

export default CallToAction
