import Image from 'next/image'
import { FunctionComponent } from 'react'
import Link from 'next/link'
import { ImageProps } from '../../entities'
import { RichTextField } from '@prismicio/types'
import { PrismicRichText } from '@prismicio/react'

interface Props {
  data: {
    logo: ImageProps
    instagramlink: {
      url: string
    }
    instagramlinklabel: RichTextField
    adressHeadline: RichTextField
    adress: RichTextField
    links: RichTextField
    partnersHeadline: RichTextField
    partners: RichTextField
  }
}

const CURRENT_YEAR = new Date().getFullYear()

export const Footer: FunctionComponent<Props> = ({ data }) => {
  return (
    <footer className="bg-grey footer ">
      <section className="flex flex-col py-14 px-5 mx-auto max-w-[1920px] xl:px-40">
        <section className="flex flex-col gap-16 justify-between items-center mb-16 md:flex-row md:gap-0">
          {data.logo.url && (
            <Image
              src={data.logo.url}
              width={data.logo.dimensions.width}
              height={data.logo.dimensions.height}
              alt={data.logo.alt}
            />
          )}
          <Link href={data.instagramlink.url}>
            <a>
              <PrismicRichText field={data.instagramlinklabel} />
            </a>
          </Link>
        </section>
        <section className="flex flex-col mx-auto mb-20 w-full lg:flex-row lg:justify-between xl:justify-around">
          <div className="mb-8 lg:pr-5 lg:mb-0 lg:w-6/12 lg:border-r-2 lg:border-r-darkGrey">
            <PrismicRichText field={data.adressHeadline} />
            <div className="grid md:grid-cols-2">
              <address className="not-italic">
                <PrismicRichText field={data.adress} />
              </address>
              <div className="mt-4 md:mt-0">
                <PrismicRichText field={data.links} />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[100px_1fr] lg:pl-5 lg:w-6/12">
            <PrismicRichText field={data.partnersHeadline} />
            <div className="flex gap-16 items-center">
              <PrismicRichText field={data.partners} />
            </div>
          </div>
        </section>
        <p className="text-center">
          {CURRENT_YEAR} Aerosol Alliance. All rights reserved.
        </p>
      </section>
    </footer>
  )
}
