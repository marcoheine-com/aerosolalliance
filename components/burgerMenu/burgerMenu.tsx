import * as React from 'react'
import Link from 'next/link'
import { Arrow, BurgerIcon, CrossIcon } from '../icons'
import { useOnClickOutside } from '../../hooks/useOnclickOutside'
import { linkResolver } from '../../prismicio'
import { RichTextField } from '@prismicio/types'
import { PrismicRichText } from '@prismicio/react'
import { useRouter } from 'next/router'

interface SubLink {
  subLink: {
    uid: string
    type: string
    url: string
  }
  subLinkLabel: RichTextField
}

interface Item {
  primary: {
    link: {
      uid: string
      type: string
      url: string
    }
    linkLabel: RichTextField
  }
  items: SubLink[]
}

interface Props {
  menuItems: Item[]
}

export const BurgerMenu: React.FC<Props> = ({ menuItems }): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false)

  const ref = React.useRef(null)

  const router = useRouter()

  React.useEffect(() => {
    setIsOpen(false)
  }, [router.asPath])

  useOnClickOutside(ref, () => setIsOpen(false))

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="font-suisseIntlSemiBold">
      <button
        onClick={toggleMenu}
        className="absolute top-12 right-8 z-[2] p-4"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <CrossIcon /> : <BurgerIcon />}
      </button>

      <ul
        className={`absolute top-0 right-0
         z-[1] p-8 md:p-20 pt-48 w-full h-screen uppercase bg-grey ${
           isOpen
             ? 'animate-slideInRight'
             : 'opacity-0 pointer-events-none animate-slideOutRight'
         }  md:p-20 md:w-[50vw] md:max-w-xl`}
        ref={ref}
      >
        {menuItems?.map((item: Item) => (
          <li
            key={item.primary.link.uid}
            className="py-8 font-semibold border-b-2 last:border-b-0 border-b-darkblue"
          >
            <Link href={linkResolver(item.primary.link)}>
              <a className="inline-block">
                <PrismicRichText field={item.primary.linkLabel} />
              </a>
            </Link>
            {item.items?.length > 0 && item.items[0].subLink.uid && (
              <ul className="pt-5">
                {item.items?.map(
                  (item: SubLink) =>
                    item.subLink.uid && (
                      <li key={item.subLink.uid}>
                        <Link
                          href={linkResolver(item.subLink)}
                          key={item.subLink.uid}
                        >
                          <a className="flex gap-4 items-center py-4 font-suisseIntlRegular font-normal">
                            {<Arrow />}
                            <PrismicRichText field={item.subLinkLabel} />
                          </a>
                        </Link>
                      </li>
                    )
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
