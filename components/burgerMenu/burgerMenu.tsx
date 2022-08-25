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
    <nav
      className="font-suisseIntlSemiBold"
      role="navigation"
    >
      <button
        onClick={toggleMenu}
        className="p-6 backdrop-blur-xl"
        aria-label="Open menu"
      >
        <BurgerIcon />
      </button>
      <ul
        className={`absolute top-0 right-0
        z-[1] p-8 md:p-20 pt-32 w-full h-screen overflow-x-scroll uppercase bg-grey transition-all translate-x-[300px] ${
          isOpen ? 'translate-x-0' : 'opacity-0 pointer-events-none'
        }  md:p-20 md:w-[50vw] md:max-w-xl`}
        ref={ref}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 p-6"
          aria-label="Close menu"
        >
          <CrossIcon />
        </button>
        {menuItems?.map((item: Item) => (
          <li
            key={item.primary.link.uid}
            className="py-4 font-semibold border-b-2 last:border-b-0 border-b-darkblue desktop:py-8"
          >
            <Link href={linkResolver(item.primary.link)}>
              <a className="flex gap-4 items-center submenuItem-trigger">
                <Arrow className="submenuItem-arrow" />
                <PrismicRichText field={item.primary.linkLabel} />
              </a>
            </Link>
            {item.items?.length > 0 &&
              (item.items[0].subLink.uid || item.items[0].subLink.url) && (
                <ul className="pt-1">
                  {item.items?.map(
                    (item: SubLink, index: number) =>
                      (item.subLink.uid || item.subLink.url) && (
                        <li
                          key={item.subLink.uid || index}
                          className="py-1 last:pb-0 desktop:py-2"
                        >
                          <Link
                            href={linkResolver(item.subLink)}
                            key={item.subLink.uid || index}
                          >
                            <a className="flex gap-4 items-center font-suisseIntlRegular font-normal submenuItem-trigger">
                              <Arrow className="submenuItem-arrow" />
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
