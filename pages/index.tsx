import type { GetStaticProps, NextPage } from 'next'
import { ToastContainer } from 'react-toastify'
import { Footer } from '../components/footer'
import { createClient } from '../prismicio'
import { Header } from '../components/header'
import { HeadComponent } from '../components/head-component'
import {
  BurgerMenuDocument,
  FooterDocument,
  HomeDocument,
} from '../types.generated'
import { SliceZone } from '@prismicio/react'
import { components } from '../slices'

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient(previewData)

  const home = (await client.getSingle('home', {})) || null
  const footer = (await client.getSingle('footer', {})) || null
  const menu = (await client.getSingle('burgerMenu', {})) || null

  return {
    props: {
      home,
      footer,
      menu,
    },
  }
}

interface Props {
  home: HomeDocument
  footer: FooterDocument
  menu: BurgerMenuDocument
}

const Home: NextPage<Props> = (props) => {
  const { footer } = props
  return (
    <>
      <ToastContainer />

      <HeadComponent
        title={props.home?.data?.title}
        description={props.home?.data?.description}
        image={props.home?.data?.image}
        imageAlt={props.home?.data?.imageAlt}
      />
      <main className="relative mx-auto flex max-w-[1920px] flex-col">
        <Header slices={props.menu?.data?.slices} />
        <SliceZone
          // @ts-ignore
          slices={props.home?.data?.slices}
          components={components}
        />
      </main>
      <Footer {...footer} />
    </>
  )
}

export default Home
