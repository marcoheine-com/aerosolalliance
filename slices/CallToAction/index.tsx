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
  linkLabel: RichTextField
  rotation: 'left' | 'right'
}

interface Props {
  slice: {
    items: Item[]
  }
}

const getLinkStyling = (item: Item): string => {
  if (item.invertedColor) {
    return `border-2 ${getBordercolorClass(item.linkColor)} ${getTextcolorClass(
      item.linkColor
    )}`
  }
  return `${getBackgroundcolorClass(
    item.linkColor
  )} border-2 ${getBordercolorClass(item.linkColor)}  text-white`
}

const getBeforeStyling = (item: Item): string => {
  if (item.invertedColor) {
    return `${getBackgroundcolorClass(
      item.linkColor
    )} border-1 ${getBordercolorClass(item.linkColor)}  text-white`
  }
  return `border-1 ${getBordercolorClass(item.linkColor)} ${getTextcolorClass(
    item.linkColor
  )}`
}

const CallToAction: React.FC<Props> = ({ slice }) => {
  return (
    <section className="flex gap-8 px-5 mx-auto mt-20 mb-40">
      {slice?.items?.map((item: Item) => (
        <React.Fragment key={item.link?.uid}>
          <Link href={`/${item.link?.uid}`}>
            <a
              className={`${getLinkStyling(item)} ${
                item.rotation === 'left' ? 'rotate-[-40deg]' : 'rotate-[40deg]'
              } font-suisseIntlMono uppercase rounded-full py-4 px-20 md:py-6 md:px-24 block hover-trigger relative overflow-hidden`}
            >
              {' '}
              <PrismicRichText
                field={item.linkLabel}
                components={{
                  paragraph: ({ children }) => (
                    <p className="mb-0 text-2xl">{children}</p>
                  ),
                }}
              />
              <span
                className={`${getBeforeStyling(
                  item
                )} rounded-full py-4 px-20 md:py-6 md:px-24 absolute top-0 left-0 transition-all inline-block hover-target`}
                aria-hidden="true"
              >
                <PrismicRichText
                  field={item.linkLabel}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="mb-0 text-2xl">{children}</p>
                    ),
                  }}
                />
              </span>
            </a>
          </Link>
        </React.Fragment>
      ))}
    </section>
  )
}

export default CallToAction
