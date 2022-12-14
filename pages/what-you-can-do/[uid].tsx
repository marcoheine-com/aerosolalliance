import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import * as prismic from '@prismicio/client'
import { Footer } from '../../components/footer'
import { createClient } from '../../prismicio'
import { Header } from '../../components/header'
import { SliceZone } from '@prismicio/react'
import { components } from '../../slices'
import { HeadComponent } from '../../components/head-component'

export const getStaticProps: GetStaticProps = async ({
  params,
  previewData,
}) => {
  const type = 'what-you-can-do-subpage'

  const client = createClient(previewData)
  // @ts-ignore
  const document = (await client.getByUID(type, params?.uid, {})) || null
  const footer = (await client.getSingle('footer', {})) || null
  const menu = (await client.getSingle('burgerMenu', {})) || null

  return {
    props: {
      document,
      footer,
      menu,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()
  const docs = await client.get({
    predicates: prismic.predicate.at(
      'document.type',
      'what-you-can-do-subpage'
    ),
    lang: '*',
  })

  return {
    paths: docs.results.map((doc) => {
      return { params: { uid: doc.uid } }
    }),
    fallback: false,
  }
}

interface Props {
  document: any
  footer: any
  menu: any
}

const WhatYouCanDo: NextPage<Props> = (props) => {
  const { footer } = props
  return (
    <>
      <HeadComponent
        title={props.document?.data?.title}
        description={props.document?.data?.description}
        image={props.document?.data?.image?.url}
        imageAlt={props.document?.data?.imageAlt}
      />
      <main className="relative mx-auto flex max-w-[1920px] flex-col">
        <Header slices={props.menu?.data?.slices} />
        <SliceZone
          slices={props.document?.data?.slices}
          components={components}
        />
      </main>
      <Footer {...footer} />
    </>
  )
}

export default WhatYouCanDo
