import Link from 'next/link'
import { useRouter } from 'next/router'
import { RichText, RichTextBlock } from 'prismic-reactjs'
import { FunctionComponent } from 'react'
import { linkResolver } from '../../utils/linkResolver'

interface Item {
  link: {
    slug: string
  }
  linkLabel: RichTextBlock[]
  parent?: {
    slug: string
  }
}

interface Props {
  className?: string
  items: Item[]
}

export const HorizontalMenu: FunctionComponent<Props> = ({
  className,
  items,
}): JSX.Element => {
  const router = useRouter()

  const isActiveLink = (slug: string): boolean => {
    if (slug.includes('---')) {
      return `/${slug.replace('---', '/')}` === router.pathname
    }
    return `/${slug}` === router.pathname
  }

  return (
    <section
      className={`flex justify-around items-center p-5 bg-grey ${className}`}
    >
      {items?.map((item) => (
        <Link href={`${linkResolver(item?.link?.slug)}`} key={item.link.slug}>
          <a
            className={`${
              isActiveLink(item?.link?.slug) ? 'font-bold' : 'font-normal'
            } uppercase fontSwissIntlMono pt-4`}
          >
            <RichText render={item.linkLabel} />
          </a>
        </Link>
      ))}
    </section>
  )
}
