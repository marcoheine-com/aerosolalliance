import * as React from 'react'
import Link from 'next/link'
import { RichText, RichTextBlock } from 'prismic-reactjs'
import { linkResolver } from '../../prismicConfiguration'
import { Arrow, BurgerIcon, CrossIcon } from '../icons'
import { useOnClickOutside } from '../../hooks/useOnclickOutside'

interface SubLink {
  subLink: {
    uid: string
    type: string
    url: string
  }
  subLinkLabel: RichTextBlock[]
}

interface Item {
  primary: {
    link: {
      uid: string
      type: string
      url: string
    }
    linkLabel: RichTextBlock[]
  }
  items: SubLink[]
}

interface Props {
  menuItems: Item[]
}

export const BurgerMenu: React.FC<Props> = ({ menuItems }): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false)

  const ref = React.useRef(null)

  useOnClickOutside(ref, () => setIsOpen(false))

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <button
        onClick={toggleMenu}
        className="absolute top-12 right-12 z-[2] p-4 bg-grey"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <CrossIcon /> : <BurgerIcon />}
      </button>

      {isOpen && (
        <nav
          className="absolute top-0 right-0 z-[1] p-5 pt-20 w-full uppercase bg-grey md:p-20 md:w-[50vw] md:max-w-xl fontSwissIntlMono"
          ref={ref}
        >
          <ul>
            {menuItems?.map((item: Item) => (
              <li
                key={item.primary.link.uid}
                className="border-b-2 last:border-b-0 border-b-darkblue"
              >
                <Link href={linkResolver(item.primary.link)}>
                  <a className="inline-block py-2 font-bold">
                    <RichText render={item.primary.linkLabel} />
                  </a>
                </Link>
                {item.items && (
                  <ul>
                    {item.items?.map(
                      (item: SubLink) =>
                        item.subLink.uid && (
                          <li key={item.subLink.uid}>
                            <Link
                              href={linkResolver(item.subLink)}
                              key={item.subLink.uid}
                            >
                              <a className="flex gap-8 items-center py-2">
                                {<Arrow />}
                                <RichText render={item.subLinkLabel} />
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
      )}
    </>
  )
}
