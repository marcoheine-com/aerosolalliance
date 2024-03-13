import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import React from 'react'
import { ReferencesSlice } from '../../types.generated'

const References: React.FC<SliceComponentProps<any>> = ({
  slice,
}) => (
  <section className="mx-auto mb-10 w-full max-w-4xl px-6 sm:px-16">
    <PrismicRichText
      field={slice.primary.content}
      components={{
        heading6: ({ children }) => <h6 className="">{children}</h6>,
        paragraph: ({ children }) => (
          <p className="references-text">{children}</p>
        ),
        oList: ({ children }) => (
          <ol className="references-list ml-0 list-decimal pl-6">{children}</ol>
        ),
        oListItem: ({ children }) => (
          <li className="pb-1 pl-2 last:pb-0">{children}</li>
        ),

        list: ({ children }) => (
          <ul className="references-list list-disc">{children}</ul>
        ),
        listItem: ({ children }) => (
          <li className="pb-1 pl-2 last:pb-0">{children}</li>
        ),
      }}
    />
  </section>
)

export default References
