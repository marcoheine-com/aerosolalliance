import React, { FunctionComponent } from 'react'
import { RichTextField } from '@prismicio/types'
import { PrismicRichText } from '@prismicio/react'
import { DistanceToBottom } from '../../entities'
import { getDistanceToBottom } from '../../utils/getDistanceToBottom'

interface Item {
  Content: RichTextField
  subline: boolean
}

interface Props {
  slice: {
    items: Item[]
    primary: {
      distanceToBottom: DistanceToBottom
    }
  }
}

const TextContent: FunctionComponent<Props> = ({ slice }): JSX.Element => {
  return (
    <>
      {slice?.items?.map((item: Item, i: number) => (
        <section
          key={i}
          className={`px-6 mx-auto max-w-4xl sm:px-16 ${getDistanceToBottom(
            slice.primary.distanceToBottom
          )}`}
        >
          <PrismicRichText
            field={item.Content}
            components={{
              paragraph: (props: any) => (
                <p
                  className={`mb-8 indent-5 first:indent-0 ${
                    item.subline ? 'text-[1.35rem]' : ''
                  }`}
                >
                  {props.children}
                </p>
              ),
            }}
          />
        </section>
      ))}
    </>
  )
}

export default TextContent
