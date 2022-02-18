import * as React from 'react'
import Link from 'next/link'
import { RichText, RichTextBlock } from 'prismic-reactjs'
import { linkResolver } from '../../prismicConfiguration'
import { Arrow, BurgerIcon, CrossIcon } from '../icons'

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

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <button onClick={toggleMenu} className="absolute top-12 right-12 z-[2]">
        {isOpen ? <CrossIcon /> : <BurgerIcon />}
      </button>

      {isOpen && (
        <nav className="absolute top-0 right-0 z-[1] p-20 w-full uppercase bg-grey md:w-[50vw] md:max-w-xl fontSwissIntlMono">
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
                              <a className="flex gap-8 py-2">
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