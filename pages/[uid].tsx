import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../components/footer'
import { createClient } from '../prismicio'
import { Header } from '../components/header'
import * as prismic from '@prismicio/client'
import { SliceZone } from '@prismicio/react'
import { components } from '../slices'
import {
  BurgerMenuDocument,
  ContentPageDocument,
  FooterDocument,
} from '../types.generated'
import { HeadComponent } from '../components/head-component'

export async function getStaticPaths() {
  const client = createClient()
  const docs = await client.get({
    predicates: prismic.predicate.at('document.type', 'content-page'),
    lang: '*',
  })
  return {
    paths: docs.results.map((doc: any) => {
      return {
        params: {
          uid: doc.uid,
        },
      }
    }),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
  previewData,
}) => {
  const client = createClient(previewData)

  // @ts-ignore
  const doc = (await client.getByUID('content-page', params?.uid, {})) || null
  const footer = (await client.getSingle('footer', {})) || null
  const menu = (await client.getSingle('burgerMenu', {})) || null

  return {
    props: {
      doc,
      footer,
      menu,
    },
  }
}

interface Props {
  doc: ContentPageDocument
  footer: FooterDocument
  menu: BurgerMenuDocument
}

const ContentPage: NextPage<Props> = (props) => {
  const { footer } = props
  return (
    <>
      <HeadComponent
        title={props.doc?.data?.title}
        description={props.doc?.data?.description}
        image={props.doc?.data?.image}
        imageAlt={props.doc?.data?.imageAlt}
      />
      <main className="relative mx-auto flex max-w-[1920px] flex-col">
        <Header slices={props.menu?.data?.slices} />
        <SliceZone
          // @ts-ignore
          slices={props.doc?.data?.slices}
          components={components}
        />
      </main>
      <Footer {...footer} />
    </>
  )
}

export default ContentPage
