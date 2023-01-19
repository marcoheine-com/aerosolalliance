import React, { FunctionComponent } from 'react'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import { getDistance } from '../../utils/getDistance'
import Link from 'next/link'
import { linkResolver } from '../../prismicio'
import {
  TextContentSlice,
  TextContentSliceDefaultSliceItem,
} from '../../types.generated'
import { getBackgroundcolorClass } from '../../utils'

const TextContent: FunctionComponent<SliceComponentProps<TextContentSlice>> = ({
  slice,
}): JSX.Element => {
  return (
    <section
      className={`${
        slice.primary.backgroundColor
          ? `${getBackgroundcolorClass(slice.primary.backgroundColor)}`
          : ''
      } ${
        slice.primary.fullViewportHeight
          ? 'flex min-h-screen flex-col justify-center'
          : ''
      }
      `}
    >
      {slice?.items?.map(
        (item: TextContentSliceDefaultSliceItem, i: number) => {
          // TODO: add check for tableOContents === true
          const tableOfContents = item.Content.filter(
            (node: any) => node.type === 'heading1' || node.type === 'heading2'
          )

          return (
            <section
              key={i}
              className={`mx-auto max-w-4xl px-6 sm:px-16 ${getDistance(
                slice.primary.distanceToBottom,
                true
              )} ${getDistance(slice.primary.distanceToTop, false)}
            `}
            >
              {tableOfContents.length >= 2 ? (
                <>
                  <ol className="ml-0 flex list-none flex-col gap-4 pl-0 font-suisseIntlMono">
                    {tableOfContents?.map((node: any, i: number) => (
                      <li key={i}>
                        <Link
                          href={`#${node.text
                            .replace(/\W+/g, '')
                            .toLowerCase()}`}
                        >
                          {`${node.text}`}
                        </Link>
                      </li>
                    ))}
                  </ol>
                  <hr className="mb-8 h-[1px] border-t-0 border-b-[1px] border-solid border-darkblue opacity-50" />
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
                    <ul className="mb-8 ml-2 list-disc pl-4">
                      {props.children}
                    </ul>
                  ),
                  hyperlink: (props: any) => (
                    <Link
                      href={linkResolver(props.node.data)}
                      className="border-b-[1px] border-b-darkblue hover:border-b-2"
                    >
                      {props.children}
                    </Link>
                  ),
                }}
              />
              {slice.primary.line ? (
                <hr className="border-t-0 border-b-[1px] border-solid border-darkblue" />
              ) : null}
            </section>
          )
        }
      )}
    </section>
  )
}

export default TextContent
