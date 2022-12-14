import type { GetStaticProps, NextPage } from 'next'
import { Footer } from '../../components/footer'
import { createClient } from '../../prismicio'
import { Header } from '../../components/header'
import { HeadComponent } from '../../components/head-component'
import { SliceZone } from '@prismicio/react'
import { components } from '../../slices'

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
  const { footer } = props
  return (
    <>
      <HeadComponent
        title={props.facts?.data?.title}
        description={props.facts?.data?.description}
        image={props.facts?.data?.image}
        imageAlt={props.facts?.data?.imageAlt}
      />

      <main className="relative mx-auto flex max-w-[1920px] flex-col">
        <Header slices={props.menu?.data?.slices} />
        <SliceZone
          slices={props.facts?.data?.slices}
          components={components}
        />
      </main>
      <Footer {...footer} />
    </>
  )
}

export default WhatYouCanDo
