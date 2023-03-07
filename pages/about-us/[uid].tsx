import type { GetStaticProps, NextPage } from 'next'
import * as prismic from '@prismicio/client'
import { Footer } from '../../components/footer'
import { createClient } from '../../prismicio'
import { Header } from '../../components/header'
import { SliceZone } from '@prismicio/react'
import { components } from '../../slices'
import {
  AboutUsSubpageDocument,
  BurgerMenuDocument,
  FooterDocument,
} from '../../types.generated'
import { HeadComponent } from '../../components/head-component'

export const getStaticProps: GetStaticProps = async ({
  params,
  previewData,
}) => {
  const client = createClient(previewData)

  const type = 'about-us-subpage'
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
    predicates: prismic.Predicates.at('document.type', 'about-us-subpage'),
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
  document: AboutUsSubpageDocument
  footer: FooterDocument
  menu: BurgerMenuDocument
}

const AboutUsSubpage: NextPage<Props> = (props) => {
  const { footer } = props
  return (
    <>
      <HeadComponent
        title={props.document?.data?.title}
        description={props.document?.data?.description}
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

export default AboutUsSubpage
