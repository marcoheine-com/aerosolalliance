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
        <section className="mb-8 flex flex-col items-center border-b-[1px] border-b-darkblue lg:w-full lg:flex-row lg:items-start lg:justify-between">
          <Logo className="pb-6 lg:p-0" />
          <section className="flex flex-col items-center justify-center pb-8 lg:items-start lg:pb-0">
            <p className="pb-1 text-center text-sm uppercase">
              {data.externallinksheadline}
            </p>
            {data.externallinks?.map(
              (externalLink: FooterDocumentDataExternallinksItem, index) => {
                const filledLink = filledLinkTypeGuard(externalLink.link)
                  ? externalLink.link
                  : null
                return (
                  <a
                    className="border-b-[1px] border-b-darkblue pb-[1px] text-center font-suisseIntlRegular text-base hover:border-b-2 hover:pb-0"
                    key={`${filledLink?.url}-${index}`}
                    href={filledLink?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {externalLink.linklabel || filledLink?.url}
                  </a>
                )
              }
            )}
          </section>

          <section className="flex max-w-[270px] flex-col items-center justify-center lg:items-start">
            <p className="pb-1 text-center text-sm uppercase">
              {data.partnersheadline}
            </p>

            {data.partners?.map(
              (partner: FooterDocumentDataPartnersItem, index: number) => {
                const filledImage = filledImageTypeGuard(partner.partnerlogo)
                  ? partner.partnerlogo
                  : null

                const filledLink = filledLinkTypeGuard(partner.link)
                  ? partner.link
                  : null

                if (!filledImage) {
                  return null
                }

                if (filledLink) {
                  return (
                    <a
                      href={filledLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={`${filledLink.url}-${index}`}
                    >
                      <Image
                        src={filledImage.url}
                        alt={filledImage.alt || ''}
                        width={filledImage.dimensions.width}
                        height={filledImage.dimensions.height}
                        key={`${filledImage.url}-${index}`}
                      />
                    </a>
                  )
                }

                return (
                  <Image
                    src={filledImage.url}
                    alt={filledImage.alt || ''}
                    width={filledImage.dimensions.width}
                    height={filledImage.dimensions.height}
                    key={`${filledImage.url}-${index}`}
                  />
                )
              }
            )}
          </section>
        </section>
        <section className="flex flex-col items-center justify-center lg:w-full lg:flex-row lg:justify-between">
          <p className="flex gap-2 text-sm">
            {data.internallinks.map(
              (
                internalLink: FooterDocumentDataInternallinksItem,
                index: number
              ) => {
                const filledLink = filledLinkTypeGuard(internalLink.link)
                  ? internalLink.link
                  : null
                return (
                  <span key={`${filledLink?.url}-${index}`}>
                    <Link
                      href={linkResolver(filledLink)}
                      className="border-b-[1px] border-b-darkblue hover:border-b-2">

                      {internalLink.linklabel || filledLink?.url}{' '}

                    </Link>
                    <span>{index === 0 && '&'}</span>
                  </span>
                );
              }
            )}
          </p>
          <p className="text-center text-sm">
            &#169; {CURRENT_YEAR} Aerosol Alliance
          </p>
        </section>
      </section>
    </footer>
  );
}
