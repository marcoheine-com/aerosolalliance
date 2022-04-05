import { PrismicRichText } from '@prismicio/react'
import { RichTextField } from '@prismicio/types'
import Link from 'next/link'
import React from 'react'
import { Color } from '../../entities'
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

// Ugh
const getRandomRotation = (): string => {
  const minRotation = 0
  const maxRotation = 10
  const rotation =
    Math.floor(Math.random() * (maxRotation - minRotation + 1)) + minRotation

  switch (rotation) {
    case -10:
      return '-rotate-[10deg]'
    case -9:
      return '-rotate-[9deg]'
    case -8:
      return '-rotate-[8deg]'
    case -7:
      return '-rotate-[7deg]'
    case -6:
      return '-rotate-[6deg]'
    case -5:
      return '-rotate-[5deg]'
    case -4:
      return '-rotate-[4deg]'
    case -3:
      return '-rotate-[3deg]'
    case -2:
      return '-rotate-[2deg]'
    case -1:
      return '-rotate-[1deg]'
    case 0:
      return 'rotate-0'
    case 1:
      return 'rotate-1'
    case 2:
      return 'rotate-2'
    case 3:
      return 'rotate-3'
    case 4:
      return 'rotate-[4deg]'
    case 5:
      return 'rotate-[5deg]'
    case 6:
      return 'rotate-6'
    case 7:
      return 'rotate-[7deg]'
    case 8:
      return 'rotate-[8deg]'
    case 9:
      return 'rotate-[9deg]'
    case 10:
      return 'rotate-[10deg]'
    default:
      return 'rotate-0'
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
    <section className="flex gap-8 px-6 mx-auto mt-20 mb-40">
      {slice?.items?.map((item: Item) => (
        <React.Fragment key={item.link?.uid}>
          <Link href={`/${item.link?.uid}`}>
            <a
              className={`${getBeforeStyling(
                item
              )} ${getRandomRotation()} font-suisseIntlMono uppercase rounded-full py-4 px-20 md:py-6 md:px-24 block hover-trigger relative overflow-hidden text-2xl`}
            >
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
            </a>
          </Link>
        </React.Fragment>
      ))}
    </section>
  )
}

export default CallToAction
