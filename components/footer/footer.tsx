import { FunctionComponent } from 'react'
import Link from 'next/link'
import { ImageProps } from '../../entities'
import { RichTextField } from '@prismicio/types'
import { PrismicRichText } from '@prismicio/react'
import { Logo } from '../logo'
import {
  FooterDocument,
  FooterDocumentDataExternallinksItem,
} from '../../types.generated'
import { linkResolver } from '../../prismicio'
import { filledLinkTypeGuard } from '../../utils/isFilledLink'

const CURRENT_YEAR = new Date().getFullYear()

export const Footer: FunctionComponent<FooterDocument> = ({ data }) => {
  const filledLogo =
    data.logo && filledLinkTypeGuard(data.logo) ? data.logo : null
  return (
    <footer className="footer flex-col items-center justify-center bg-grey">
      <section className="p-4">
        <Logo />
        <section className="flex flex-col items-center justify-center">
          <p className="text-center">{data.externallinksheadline}</p>
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
                  <a className="text-center">
                    {externalLink.linklabel || filledLink?.url}
                  </a>
                </Link>
              )
            }
          )}
        </section>
      </section>
      <p className="text-center">
        {CURRENT_YEAR} Aerosol Alliance. All rights reserved.
      </p>
    </footer>
  )
}
