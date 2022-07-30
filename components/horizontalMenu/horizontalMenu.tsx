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
      className={`flex flex-col sm:grid sm:grid-cols-2 sm:auto-rows-[1fr] xl:flex xl:flex-row justify-around items-center bg-grey ${className}`}
    >
      {items?.map((item) =>
        item.link?.url ? (
          <Link
            href={linkResolver(item.link)}
            key={item.link.url}
          >
            <a
              className={`${
                isActiveLink(item?.link?.url)
                  ? 'bg-darkblue text-white font-bold'
                  : 'font-normal'
              } w-full h-full flex gap-4 items-center justify-center uppercase font-suisseIntlMono py-4 xl:py-0 submenuItem-trigger border-[1px] border-separate border-white`}
            >
              <Arrow
                className="horizontalmenuItem-arrow"
                isActive={isActiveLink(item?.link?.url)}
              />
              <PrismicRichText field={item.linkLabel} />
            </a>
          </Link>
        ) : null
      )}
    </section>
  )
}
