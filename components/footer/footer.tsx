import Image from 'next/image'
import { FunctionComponent } from 'react'
import { Link, RichText, RichTextBlock } from 'prismic-reactjs'

export interface ImageProps {
  url: string
  dimensions: {
    width: number
    height: number
  }
  alt: string
}

interface Props {
  data: {
    logo: ImageProps
    instagramlink: Link
    instagramlinklabel: RichTextBlock[]
    adressHeadline: RichTextBlock[]
    adress: RichTextBlock[]
    links: RichTextBlock[]
    partnersHeadline: RichTextBlock[]
    partners: RichTextBlock[]
  }
}

const CURRENT_YEAR = new Date().getFullYear()

export const Footer: FunctionComponent<Props> = ({ data }) => {
  return (
    <footer className="py-14 px-5 bg-grey xl:px-40 footer">
      <section className="flex flex-col gap-16 justify-between items-center mb-16 md:flex-row md:gap-0 xl:justify-around">
        {data.logo && (
          <Image
            src={data.logo.url}
            width={data.logo.dimensions.width}
            height={data.logo.dimensions.height}
            alt={data.logo.alt}
          />
        )}

        <a href={Link.url(data.instagramlink)}>
          <RichText render={data.instagramlinklabel} />
        </a>
      </section>
      <section className="flex flex-col mx-auto mb-20 lg:flex-row lg:justify-between xl:justify-around">
        <div className="mb-8 lg:pr-5 lg:mb-0 lg:w-6/12 lg:border-r-2 lg:border-r-darkGrey">
          <RichText render={data.adressHeadline} />
          <div className="grid grid-cols-2">
            <address className="not-italic">
              <RichText render={data.adress} />
            </address>
            <div>
              <RichText render={data.links} />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[100px_1fr] lg:pl-5 lg:w-6/12">
          <RichText render={data.partnersHeadline} />
          <div className="flex gap-16 items-center">
            <RichText render={data.partners} />
          </div>
        </div>
      </section>
      <p className="text-center">
        {CURRENT_YEAR} Aerosol Alliance. All rights reserved.
      </p>
    </footer>
  )
}
