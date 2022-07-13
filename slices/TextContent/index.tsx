import React, { FunctionComponent } from 'react'
import { RichTextField } from '@prismicio/types'
import { PrismicRichText } from '@prismicio/react'
import { DistanceToBottom } from '../../entities'
import { getDistanceToBottom } from '../../utils/getDistanceToBottom'
import Link from 'next/link'

interface Item {
  Content: RichTextField
  subline: boolean
}

interface Props {
  slice: {
    items: Item[]
    primary: {
      distanceToBottom: DistanceToBottom
      tableOfContent: boolean
    }
  }
}

const TextContent: FunctionComponent<Props> = ({ slice }): JSX.Element => {
  return (
    <>
      {slice?.items?.map((item: Item, i: number) => {
        // TODO: add check for tableOContents === true
        const tableOfContents = item.Content.filter(
          (node: any) => node.type === 'heading1' || node.type === 'heading2'
        )

        return (
          <section
            key={i}
            className={`px-6 mx-auto max-w-4xl sm:px-16 ${getDistanceToBottom(
              slice.primary.distanceToBottom
            )}`}
          >
            {tableOfContents.length >= 2 ? (
              <ul className="flex flex-col gap-4 pl-4 mb-10 list-disc">
                {tableOfContents?.map((node: any, i: number) => (
                  <li key={i}>
                    <Link
                      href={`#${node.text.replace(/\W+/g, '').toLowerCase()}`}
                    >
                      <a>{`[${i + 1}] ${node.text}`}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}

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
                heading1: (props: any) => (
                  <h1 id={props.text.replace(/\W+/g, '').toLowerCase()}>
                    {props.children}
                  </h1>
                ),
                heading2: (props: any) => (
                  <h2 id={props.text.replace(/\W+/g, '').toLowerCase()}>
                    {props.children}
                  </h2>
                ),
                oList: (props: any) => (
                  <ol className="pl-4 mb-8 list-disc">{props.children}</ol>
                ),
                list: (props: any) => (
                  <ul className="pl-4 mb-8 list-disc">{props.children}</ul>
                ),
              }}
            />
          </section>
        )
      })}
    </>
  )
}

export default TextContent
