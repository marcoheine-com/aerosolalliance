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
      className="flex font-suisseIntlSemiBold"
      role="navigation"
    >
      <button
        onClick={toggleMenu}
        className="p-6 pr-10 backdrop-blur-xl"
        aria-label="Open menu"
      >
        <BurgerIcon />
      </button>
      <ul
        className={`absolute top-0 right-0
        z-[1] h-screen translate-x-[300px] overflow-x-scroll bg-grey uppercase transition-all ${
          isOpen
            ? 'w-full translate-x-0 p-8 pt-12 md:w-[50vw] md:p-20'
            : 'pointer-events-none w-0 p-0 opacity-0'
        }    md:max-w-xl`}
        ref={ref}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 p-6 pr-10"
          aria-label="Close menu"
        >
          <CrossIcon />
        </button>
        {menuItems?.map((item: Item) => (
          <li
            key={item.primary.link.uid}
            className="border-b-2 border-b-darkblue py-4 font-semibold last:border-b-0 desktop:py-8"
          >
            <Link href={linkResolver(item.primary.link)}>
              <a className="submenuItem-trigger flex items-center gap-4">
                <Arrow className="submenuItem-arrow" />
                <PrismicRichText
                  field={item.primary.linkLabel}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="pb-0">{children}</p>
                    ),
                  }}
                />
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
                              <PrismicRichText
                                field={item.subLinkLabel}
                                components={{
                                  paragraph: ({ children }) => (
                                    <p className="pb-0">{children}</p>
                                  ),
                                }}
                              />
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
