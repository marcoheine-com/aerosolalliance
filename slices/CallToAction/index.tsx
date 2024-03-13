import { PrismicRichText } from '@prismicio/react'
import { RichTextField } from '@prismicio/types'
import Link from 'next/link'
import React from 'react'
import { Color } from '../../entities'
import { linkResolver } from '../../prismicio'
import {
  getBackgroundcolorClass,
  getBordercolorClass,
  getTextcolorClass,
} from '../../utils'

interface Item {
  invertedColor: boolean
  linkColor: Color
  link: {
    uid: string
  }
  linkLabel: string
}

interface Props {
  slice: {
    items: Item[]
  }
}

const getLinkStyling = (item: Item): string => {
  if (item.invertedColor) {
    return `border-1 ${getBordercolorClass(item.linkColor)} ${getTextcolorClass(
      item.linkColor
    )}`
  }
  return `${getBackgroundcolorClass(item.linkColor)}  text-white`
}

const getBeforeStyling = (item: Item): string => {
  if (item.invertedColor) {
    return `${getBackgroundcolorClass(
      item.linkColor
    )} border-2 ${getBordercolorClass(item.linkColor)}  text-white`
  }
  return `border-2 ${getBordercolorClass(item.linkColor)} ${getTextcolorClass(
    item.linkColor
  )}`
}

const CallToAction: React.FC<Props> = ({ slice }) => {
  return (
    <section className="flex gap-8 px-6 mx-auto mt-10 mb-20">
      {slice?.items?.map((item: Item, index: number) => (
        <React.Fragment key={`${item.link?.uid}_${index}`}>
          <Link
            href={linkResolver(item.link)}
            className={`${getBeforeStyling(
              item
            )} font-suisseIntlMono uppercase rounded-full py-4 px-20 md:py-6 md:px-24 block hover-trigger relative overflow-hidden text-2xl`}>

            {' '}
            {item.linkLabel}
            <span
              className={` ${getLinkStyling(
                item
              )} rounded-full py-4 md:py-6 flex justify-center items-center absolute top-0 h-full bg-white left-0 right-0 transition-all hover-target`}
              aria-hidden="true"
            >
              {item.linkLabel}
            </span>

          </Link>
        </React.Fragment>
      ))}
    </section>
  );
}

export default CallToAction
