import { PrismicRichText } from '@prismicio/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'
import { Item } from '../../entities/item'
import { linkResolver } from '../../prismicio'
import { Arrow } from '../icons'

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
      className={`flex flex-col items-center justify-around bg-grey sm:grid sm:auto-rows-[1fr] sm:grid-cols-2 xl:flex xl:flex-row ${className}`}
    >
      {items?.map((item) =>
        item.link?.url ? (
          <Link
            href={linkResolver(item.link)}
            key={item.link.url}
            passHref
            className={`${
              isActiveLink(item?.link?.url)
                ? 'bg-darkblue font-bold text-white'
                : 'font-normal'
            } submenuItem-trigger flex h-full w-full border-separate items-center justify-center gap-4 border-[1px] border-white py-4 font-suisseIntlMono uppercase xl:py-0`}
          >
            <Arrow
              className="horizontalmenuItem-arrow"
              isActive={isActiveLink(item?.link?.url)}
            />
            <PrismicRichText
              field={item.linkLabel}
              components={{
                paragraph: ({ children }) => <p className="pb-0">{children}</p>,
              }}
            />
          </Link>
        ) : null
      )}
    </section>
  )
}
