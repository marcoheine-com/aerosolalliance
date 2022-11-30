import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import React from 'react'
import { ReferencesSlice } from '../../types.generated'

const References: React.FC<SliceComponentProps<ReferencesSlice>> = ({
  slice,
}) => (
  <section className="px-6 mx-auto mb-10 w-full max-w-4xl sm:px-16">
    <PrismicRichText
      field={slice.primary.content}
      components={{
        heading6: ({ children }) => <h6 className="">{children}</h6>,
        paragraph: ({ children }) => (
          <p className="references-text">{children}</p>
        ),
        oList: ({ children }) => (
          <ol className="pl-6 ml-0 list-decimal references-list">{children}</ol>
        ),
        oListItem: ({ children }) => (
          <li className="pb-1 last:pb-0 pl-2">{children}</li>
        ),

        list: ({ children }) => (
          <ul className="list-disc references-list">{children}</ul>
        ),
        listItem: ({ children }) => (
          <li className="pb-1 last:pb-0 pl-2">{children}</li>
        ),
      }}
    />
  </section>
)

export default References
