import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import React from 'react'
import { ReferencesSlice } from '../../types.generated'

const References: React.FC<SliceComponentProps<ReferencesSlice>> = ({
  slice,
}) => (
  <section className="px-6 mx-auto mb-10 max-w-4xl">
    <PrismicRichText field={slice.primary.content} />
  </section>
)

export default References
