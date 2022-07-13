import * as React from 'react'
import { ImageProps } from '../../entities'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface Props {
  title: string
  description: string
  image: { url: string; alt: string }
  favicon?: string
}
export const HeadComponent: React.FC<Props> = ({
  title,
  description,
  image,
  favicon = '/favicon.ico',
}) => {
  const router = useRouter()
  const canonical = `https://aerosolalliance.com${router.asPath}`

  return (
    <Head>
      <title>{title}</title>
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:image"
        content={image?.url}
      />
      <meta
        property="og:image:alt"
        content={image?.alt}
      />
      <meta
        property="og:title"
        content={title}
      />
      <meta
        name="description"
        content={description}
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
