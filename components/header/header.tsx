import * as React from 'react'
import { BurgerMenu } from '../burgerMenu'
import { Logo } from '../logo'

interface Props {
  slices: any
}

export const Header: React.FC<Props> = ({ slices }): JSX.Element => {
  // hide header on scroll down
  const [prevScrollPos, setPrevScrollPos] = React.useState(0)
  const [visible, setVisible] = React.useState(true)

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      const visible = prevScrollPos > currentScrollPos

      setVisible(visible)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, visible])
  return (
    <header
      className={`sticky top-0 z-[3] w-full max-w-[1920px] bg-header transition-all ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <section className="flex justify-between">
        <Logo />
        <BurgerMenu menuItems={slices} />
      </section>
    </header>
  )
}
