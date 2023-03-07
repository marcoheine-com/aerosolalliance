import * as React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { EmptyLinkField, FilledLinkToMediaField } from '@prismicio/types'

interface Props {
  title?: string | null
  description?: string | null
  image?: FilledLinkToMediaField | EmptyLinkField | null
  imageAlt?: string | null
  favicon?: string
}
export const HeadComponent: React.FC<Props> = ({
  title,
  description,
  image,
  imageAlt,
  favicon = '/favicon.png',
}) => {
  const router = useRouter()
  const canonical = `https://aerosolalliance.com${router.asPath}`

  const isFilledLinkToMediaField = (
    field: FilledLinkToMediaField | EmptyLinkField | string
  ): field is FilledLinkToMediaField => {
    return (field as FilledLinkToMediaField).url !== undefined
  }

  const filledImage =
    image && isFilledLinkToMediaField(image) ? image.url : favicon

  return (
    <Head>
      <title>{title || 'Aerosol Alliance'}</title>
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:description"
        content={
          description ||
          'Our goal with the aerosol alliance is to reduce the negative impact of the spray cans and create awareness in the spray paint industry.'
        }
      />
      <meta
        property="og:image"
        content={filledImage}
      />
      <meta
        property="og:image:alt"
        content={imageAlt || 'Aerosol Alliance Logo'}
      />
      <meta
        property="og:title"
        content={title || 'Aerosol Alliance'}
      />
      <meta
        name="description"
        content={
          description ||
          'Our goal with the aerosol alliance is to reduce the negative impact of the spray cans and create awareness in the spray paint industry.'
        }
      />
      <link
        rel="icon"
        href={favicon}
      />
      <link
        rel="canonical"
        href={canonical}
      />
    </Head>
  )
}
