import React, { FunctionComponent } from 'react'
import { RichTextField } from '@prismicio/types'
import { PrismicRichText } from '@prismicio/react'
import { DistanceToBottom } from '../../entities'
import { getDistance } from '../../utils/getDistance'
import Link from 'next/link'
import { linkResolver } from '../../prismicio'

interface Item {
  Content: RichTextField
  subline: boolean
}

interface Props {
  slice: {
    items: Item[]
    primary: {
      distanceToBottom: DistanceToBottom
      distanceToTop: DistanceToBottom
      line: boolean
      intro: boolean
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
            className={`px-6 mx-auto ${
              slice.primary.intro ? 'max-w-[1400px] mb-10' : 'max-w-4xl'
            } sm:px-16 ${getDistance(
              slice.primary.distanceToBottom,
              true
            )} ${getDistance(slice.primary.distanceToTop, false)}`}
          >
            {tableOfContents.length >= 2 ? (
              <>
                <ol className="flex flex-col gap-4 pl-0 ml-0 list-none">
                  {tableOfContents?.map((node: any, i: number) => (
                    <li key={i}>
                      <Link
                        href={`#${node.text.replace(/\W+/g, '').toLowerCase()}`}
                      >
                        <a>{`${node.text}`}</a>
                      </Link>
                    </li>
                  ))}
                </ol>
                <hr className="mb-8 h-[1px] border-t-0 border-b-[1px] border-darkblue border-solid opacity-50 lg:mb-16" />
              </>
            ) : null}

            <PrismicRichText
              field={item.Content}
              components={{
                paragraph: (props: any) => (
                  <p
                    className={`${item.subline ? '' : ''} ${
                      slice.primary.intro ? 'intro-text' : ''
                    }
                    `}
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
                  <ol className="pl-4">{props.children}</ol>
                ),
                list: (props: any) => (
                  <ul className="pl-4 mb-8 ml-6 list-disc">{props.children}</ul>
                ),
                hyperlink: (props: any) => (
                  <Link href={linkResolver(props.node.data)}>
                    <a className="border-b-[1px] hover:border-b-2 border-b-darkblue">
                      {props.children}
                    </a>
                  </Link>
                ),
              }}
            />
            {slice.primary.line ? (
              <hr className="border-b-2 border-darkblue border-solid" />
            ) : null}
          </section>
        )
      })}
    </>
  )
}

export default TextContent
