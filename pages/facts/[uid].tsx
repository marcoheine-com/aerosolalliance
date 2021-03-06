import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import * as prismic from '@prismicio/client'
import { Footer } from '../../components/footer'
import { createClient } from '../../prismicio'
import { Slicemachine } from '../../components/slicemachine'
import { Header } from '../../components/header'
import { HeadComponent } from '../../components/head-component'

export const getStaticProps: GetStaticProps = async ({
  params,
  previewData,
}) => {
  const client = createClient(previewData)

  const type = 'facts-subpage'
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
    predicates: prismic.Predicates.at('document.type', 'facts-subpage'),
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
  document: {
    data: {
      title: string
      description: string
      image: {
        url: string
        alt: string
      }
      imageAlt: string
      slices: any
    }
  }
  footer: any
  menu: any
}

const WhatYouCanDo: NextPage<Props> = (props) => {
  return (
    <>
      <HeadComponent
        title={props.document?.data?.title}
        description={props.document?.data?.description}
        image={props.document?.data?.image}
        imageAlt={props.document?.data?.imageAlt}
      />
      <main className="flex relative flex-col mx-auto max-w-[1920px]">
        <Header slices={props.menu?.data?.slices} />
        <Slicemachine slices={props.document?.data?.slices} />
      </main>
      <Footer data={props.footer.data} />
    </>
  )
}

export default WhatYouCanDo
