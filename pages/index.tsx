import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Client from '../prismicHelpers'
// @ts-ignore
import SliceZone from 'next-slicezone'
import * as Slices from '../slices'

// @ts-ignore
const resolver = ({ sliceName }) => Slices[sliceName]

export const getStaticProps: GetStaticProps = async () => {
  const document = (await Client().getSingle('home', {})) || null

  return {
    props: document,
  }
}

interface Props {
  data: any
}

const Home: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Aerosol Aliance</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="max-w-[1920px] flex flex-col mx-auto">
        <SliceZone slices={props.data.slices} resolver={resolver} />
      </main>
    </>
  )
}

export default Home
