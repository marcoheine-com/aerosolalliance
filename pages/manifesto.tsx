import type { GetStaticProps, NextPage } from 'next'
import { Footer } from '../components/footer'
import { createClient } from '../prismicio'
import { Header } from '../components/header'
import { SliceZone } from '@prismicio/react'
import { components } from '../slices'
import { HeadComponent } from '../components/head-component'
import {
  BurgerMenuDocument,
  FooterDocument,
  ManifestoDocument,
} from '../types.generated'

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient(previewData)

  const manifesto = (await client.getSingle('manifesto', {})) || null
  const footer = (await client.getSingle('footer', {})) || null
  const menu = (await client.getSingle('burgerMenu', {})) || null

  return {
    props: {
      manifesto,
      footer,
      menu,
    },
  }
}

interface Props {
  manifesto: ManifestoDocument
  footer: FooterDocument
  menu: BurgerMenuDocument
}

const Manifesto: NextPage<Props> = (props) => {
  const { footer } = props
  return (
    <>
      <HeadComponent />

      <main className="relative mx-auto flex max-w-[1920px] flex-col">
        <Header slices={props.menu?.data?.slices} />
        <SliceZone
          slices={props.manifesto?.data?.slices}
          components={components}
        />
      </main>
      <Footer {...footer} />
    </>
  )
}

export default Manifesto
