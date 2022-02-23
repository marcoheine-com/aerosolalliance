import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Client from '../../prismicHelpers'
import Prismic from '@prismicio/client'
// @ts-ignore
import SliceZone from 'next-slicezone'
import * as Slices from '../../slices'
import { Footer } from '../../components/footer'
import { BurgerMenu } from '../../components/burgerMenu'

// @ts-ignore
const resolver = ({ sliceName }) => Slices[sliceName]

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const type = 'facts-subpage'
  // @ts-ignore
  const document = (await Client().getByUID(type, params?.uid, {})) || null
  const footer = (await Client().getSingle('footer', {})) || null
  const menu = (await Client().getSingle('burgerMenu', {})) || null

  return {
    props: {
      document,
      footer,
      menu,
    },
  }
}

export async function getStaticPaths() {
  const docs = await Client().query(
    Prismic.Predicates.at('document.type', 'facts-subpage'),
    { lang: '*' }
  )
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
  return (
    <>
      <Head>
        <title>Aerosol Aliance</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex flex-col mx-auto max-w-[1920px]">
        <BurgerMenu menuItems={props.menu?.data?.slices} />
        <SliceZone slices={props.document?.data?.slices} resolver={resolver} />
      </main>
      <Footer data={props.footer.data} />
    </>
  )
}

export default WhatYouCanDo
