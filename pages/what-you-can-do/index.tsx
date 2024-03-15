import type { GetStaticProps, NextPage } from 'next'
import { Footer } from '../../components/footer'
import { createClient } from '../../prismicio'
import { Header } from '../../components/header'
import { SliceZone } from '@prismicio/react'
import { components } from '../../slices'
import {
  BurgerMenuDocument,
  FooterDocument,
  WhatYouCanDoDocument,
} from '../../types.generated'
import { HeadComponent } from '../../components/head-component'

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient(previewData)

  const whatYouCanDo = (await client.getSingle('what-you-can-do', {})) || null
  const footer = (await client.getSingle('footer', {})) || null
  const menu = (await client.getSingle('burgerMenu', {})) || null

  return {
    props: {
      whatYouCanDo,
      footer,
      menu,
    },
  }
}

interface Props {
  whatYouCanDo: WhatYouCanDoDocument
  footer: FooterDocument
  menu: BurgerMenuDocument
}

const WhatYouCanDo: NextPage<Props> = (props) => {
  const { footer } = props
  return (
    <>
      <HeadComponent
        title={props?.whatYouCanDo?.data?.title}
        description={props?.whatYouCanDo?.data?.description}
        image={props?.whatYouCanDo?.data?.image}
        imageAlt={props?.whatYouCanDo?.data?.imageAlt}
      />
      <main className="relative mx-auto flex max-w-[1920px] flex-col">
        <Header slices={props.menu?.data?.slices} />
        <SliceZone
          // @ts-ignore
          slices={props.whatYouCanDo?.data?.slices}
          components={components}
        />
      </main>
      <Footer {...footer} />
    </>
  )
}

export default WhatYouCanDo
