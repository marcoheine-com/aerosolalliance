import type { GetStaticProps, NextPage } from 'next'
import { Footer } from '../../components/footer'
import { createClient } from '../../prismicio'
import { Header } from '../../components/header'
import { SliceZone } from '@prismicio/react'
import { components } from '../../slices'
import { HeadComponent } from '../../components/head-component'
import {
  AboutUsDocument,
  BurgerMenuDocument,
  FooterDocument,
} from '../../types.generated'

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient(previewData)

  const aboutUs = (await client.getSingle('about-us', {})) || null
  const footer = (await client.getSingle('footer', {})) || null
  const menu = (await client.getSingle('burgerMenu', {})) || null

  return {
    props: {
      aboutUs,
      footer,
      menu,
    },
  }
}

interface Props {
  aboutUs: AboutUsDocument
  footer: FooterDocument
  menu: BurgerMenuDocument
}

const Manifesto: NextPage<Props> = (props) => {
  const { footer } = props
  return (
    <>
      <HeadComponent
        title={props.aboutUs?.data?.title}
        description={props.aboutUs?.data?.description}
        image={props.aboutUs?.data?.image}
        imageAlt={props.aboutUs?.data?.imageAlt}
      />
      <main className="relative mx-auto flex max-w-[1920px] flex-col">
        <Header slices={props.menu?.data?.slices} />
        <SliceZone
          slices={props.aboutUs?.data?.slices}
          components={components}
        />
      </main>
      <Footer {...footer} />
    </>
  )
}

export default Manifesto
