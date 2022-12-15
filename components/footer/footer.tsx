import { FunctionComponent } from 'react'
import Link from 'next/link'
import { Logo } from '../logo'
import {
  FooterDocument,
  FooterDocumentDataExternallinksItem,
  FooterDocumentDataInternallinksItem,
  FooterDocumentDataPartnersItem,
} from '../../types.generated'
import { linkResolver } from '../../prismicio'
import { filledLinkTypeGuard } from '../../utils/isFilledLink'
import Image from 'next/image'
import { filledImageTypeGuard } from '../../utils/filledImageTypeGuard'

const CURRENT_YEAR = new Date().getFullYear()

export const Footer: FunctionComponent<FooterDocument> = ({ data }) => {
  return (
    <footer className="mx-auto max-w-[1920px] bg-grey font-suisseIntlMono">
      <section className="flex flex-col items-center justify-center p-8">
        <section className="mb-8 flex flex-col items-center border-b-[1px] border-b-darkblue lg:grid lg:grid-cols-3">
          <Logo />
          <section className="flex flex-col items-center justify-center pb-8 lg:items-start">
            <p className="pb-1 text-center text-sm uppercase">
              {data.externallinksheadline}
            </p>
            {data.externallinks.map(
              (externalLink: FooterDocumentDataExternallinksItem, index) => {
                const filledLink = filledLinkTypeGuard(externalLink.link)
                  ? externalLink.link
                  : null
                return (
                  <Link
                    key={index}
                    href={linkResolver(externalLink.link)}
                  >
                    <a className="border-b-[1px] border-b-darkblue text-center font-suisseIntlRegular text-base">
                      {externalLink.linklabel || filledLink?.url}
                    </a>
                  </Link>
                )
              }
            )}
          </section>

          <section className="flex flex-col items-center justify-center lg:items-start">
            <p className="pb-1 text-center text-sm uppercase">
              {data.partnersheadline}
            </p>

            {data.partners.map((partner: FooterDocumentDataPartnersItem) => {
              const filledImage = filledImageTypeGuard(partner.partnerlogo)
                ? partner.partnerlogo
                : null

              if (!filledImage) {
                return null
              }
              return (
                <Image
                  src={filledImage.url}
                  alt={filledImage.alt || ''}
                  width={filledImage.dimensions.width}
                  height={filledImage.dimensions.height}
                  key={filledImage.url}
                />
              )
            })}
          </section>
        </section>
        <section className="flex flex-col items-center justify-center lg:w-full lg:flex-row lg:justify-between">
          <p className="flex gap-2 text-sm">
            {data.internallinks.map(
              (internalLink: FooterDocumentDataInternallinksItem, index) => {
                const filledLink = filledLinkTypeGuard(internalLink.link)
                  ? internalLink.link
                  : null
                return (
                  <>
                    <Link
                      key={index}
                      href={linkResolver(filledLink)}
                    >
                      <a className="border-b-[1px] border-b-darkblue">
                        {internalLink.linklabel || filledLink?.url}{' '}
                      </a>
                    </Link>
                    <span>{index === 0 && '&'}</span>
                  </>
                )
              }
            )}
          </p>
          <p className="text-center text-sm">
            &#169; {CURRENT_YEAR} Aerosol Alliance
          </p>
        </section>
      </section>
    </footer>
  )
}
