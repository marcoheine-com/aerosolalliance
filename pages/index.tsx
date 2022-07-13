import type { GetStaticProps, NextPage } from 'next'
import { ToastContainer } from 'react-toastify'
import { Footer } from '../components/footer'
import { createClient } from '../prismicio'
import { Slicemachine } from '../components/slicemachine'
import { Header } from '../components/header'
import { HeadComponent } from '../components/head-component'

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
  home: {
    data: {
      title: string
      description: string
      image: {
        url: string
        alt: string
      }
      slices: any
    }
  }
  footer: any
  menu: any
}

const Home: NextPage<Props> = (props) => {
  return (
    <>
      <ToastContainer />

      <HeadComponent
        title={props.home?.data?.title}
        description={props.home?.data?.description}
        image={props.home?.data?.image}
      />
      <main className="flex relative flex-col mx-auto max-w-[1920px]">
        <Header slices={props.menu?.data?.slices} />
        <Slicemachine slices={props.home?.data?.slices} />
      </main>
      <Footer data={props.footer.data} />
    </>
  )
}

export default Home
