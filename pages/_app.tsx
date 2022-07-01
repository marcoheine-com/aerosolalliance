import { PrismicProvider } from '@prismicio/react'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import '../styles/global.css'
import { linkResolver, repositoryName } from '../prismicio'
import { PrismicPreview } from '@prismicio/next'
import PlausibleProvider from 'next-plausible'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <PlausibleProvider domain="aerosolalliance.com">
          <Component {...pageProps} />
        </PlausibleProvider>
      </PrismicPreview>
    </PrismicProvider>
  )
}

export default MyApp
