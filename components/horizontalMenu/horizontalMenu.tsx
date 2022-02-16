import Link from 'next/link'
import { useRouter } from 'next/router'
import { RichText, RichTextBlock } from 'prismic-reactjs'
import { FunctionComponent } from 'react'

interface Props {
  className?: string
  items: {
    link: {
      slug: string
    }
    linkLabel: RichTextBlock[]
  }[]
}
export const HorizontalMenu: FunctionComponent<Props> = ({
  className,
  items,
}): JSX.Element => {
  const router = useRouter()

  return (
    <section
      className={`flex justify-around items-center p-5 bg-grey ${className}`}
    >
      {items?.map((item) => (
        <Link href={`/${item.link.slug}`} key={item.link.slug}>
          <a
            className={`${
              router.pathname === `/${item.link.slug}`
                ? 'font-bold'
                : 'font-normal'
            } fontSwissIntlMono pt-4`}
          >
            <RichText render={item.linkLabel} />
          </a>
        </Link>
      ))}
    </section>
  )
}
