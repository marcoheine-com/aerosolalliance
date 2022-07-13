import type { GetStaticProps, NextPage } from 'next'
import { Footer } from '../../components/footer'
import { createClient } from '../../prismicio'
import { Slicemachine } from '../../components/slicemachine'
import { Header } from '../../components/header'
import { HeadComponent } from '../../components/head-component'

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient(previewData)

  const facts = (await client.getSingle('facts', {})) || null
  const footer = (await client.getSingle('footer', {})) || null
  const menu = (await client.getSingle('burgerMenu', {})) || null

  return {
    props: {
      facts,
      footer,
      menu,
    },
  }
}

interface Props {
  facts: {
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
        title={props.facts?.data?.title}
        description={props.facts?.data?.description}
        image={props.facts?.data?.image}
        imageAlt={props.facts?.data?.imageAlt}
      />

      <main className="flex relative flex-col mx-auto max-w-[1920px]">
        <Header slices={props.menu?.data?.slices} />
        <Slicemachine slices={props.facts?.data?.slices} />
      </main>
      <Footer data={props.footer.data} />
    </>
  )
}

export default WhatYouCanDo
