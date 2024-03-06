import { useTranslation } from '../../../i18n'
import { NavbarBase } from './NavbarBase'

interface Props {
  lng: string
}

export const Navbar = async ({ lng }: Props) => {

  return (
    <NavbarBase lng={lng} />
  )
}