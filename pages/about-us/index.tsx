import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../../components/footer'
import { createClient } from '../../prismicio'
import { Slicemachine } from '../../components/slicemachine'
import { Header } from '../../components/header'

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
  aboutUs: any
  footer: any
  menu: any
}

const Manifesto: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Aerosol Aliance</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
      </Head>
      <main className="flex relative flex-col mx-auto max-w-[1920px]">
        <Header slices={props.menu?.data?.slices} />
        <Slicemachine slices={props.aboutUs?.data?.slices} />
      </main>
      <Footer data={props.footer.data} />
    </>
  )
}

export default Manifesto
