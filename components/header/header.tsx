import { BurgerMenu } from '../burgerMenu'
import { Logo } from '../logo'

interface Props {
  slices: any
}

export const Header: React.FC<Props> = ({ slices }): JSX.Element => {
  return (
    <header className="fixed z-[3] w-full max-w-[1920px]">
      <section className="flex justify-between">
        <Logo />
        <BurgerMenu menuItems={slices} />
      </section>
    </header>
  )
}
