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
    <section className="mx-auto mt-10 mb-20 flex gap-8 px-6">
      {slice?.items?.map((item: Item, index: number) => (
        <React.Fragment key={`${item.link?.uid}_${index}`}>
          <Link
            href={linkResolver(item.link)}
            passHref
            className={`${getBeforeStyling(
              item
            )} hover-trigger relative block overflow-hidden rounded-full py-4 px-20 font-suisseIntlMono text-2xl uppercase md:py-6 md:px-24`}
          >
            {' '}
            {item.linkLabel}
            <span
              className={` ${getLinkStyling(
                item
              )} hover-target absolute inset-x-0 top-0 flex h-full items-center justify-center rounded-full bg-white py-4 transition-all md:py-6`}
              aria-hidden="true"
            >
              {item.linkLabel}
            </span>
          </Link>
        </React.Fragment>
      ))}
    </section>
  )
}

export default CallToAction
