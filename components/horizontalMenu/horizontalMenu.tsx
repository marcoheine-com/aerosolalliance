import Link from 'next/link'
import { useRouter } from 'next/router'
import { RichText, RichTextBlock } from 'prismic-reactjs'
import { FunctionComponent } from 'react'
import { Item } from '../../entities/item'
import { linkResolver } from '../../prismicConfiguration'

interface Props {
  className?: string
  items: Item[]
}

export const HorizontalMenu: FunctionComponent<Props> = ({
  className,
  items,
}): JSX.Element => {
  const router = useRouter()

  const isActiveLink = (url: string): boolean => {
    return url === router.asPath
  }

  return (
    <section
      className={`flex flex-col lg:flex-row justify-around items-center p-5 bg-grey ${className}`}
    >
      {items?.map((item) =>
        item.link?.url ? (
          <Link href={linkResolver(item.link)} key={item.link.url}>
            <a
              className={`${
                isActiveLink(item?.link?.url) ? 'font-bold' : 'font-normal'
              } uppercase font-suisseIntlMono pt-4 lg:pt-0`}
            >
              <RichText render={item.linkLabel} />
            </a>
          </Link>
        ) : null
      )}
    </section>
  )
}
